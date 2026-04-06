import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RichText({ richText }: { richText: any[] }) {
  return (
    <>
      {richText.map((text: any, i: number) => {
        const content = text.plain_text;
        const { bold, italic, code, strikethrough, underline } = text.annotations ?? {};

        let el: React.ReactNode = content;
        if (code) el = <code key={i} className="notion-code-inline">{content}</code>;
        if (bold) el = <strong key={i}>{el}</strong>;
        if (italic) el = <em key={i}>{el}</em>;
        if (strikethrough) el = <s key={i}>{el}</s>;
        if (underline) el = <u key={i}>{el}</u>;

        if (text.href) {
          return (
            <a key={i} href={text.href} target="_blank" rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-300">
              {el}
            </a>
          );
        }

        return <React.Fragment key={i}>{el}</React.Fragment>;
      })}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NotionBlock({ block }: { block: any }) {
  const { type } = block;

  switch (type) {
    case "paragraph":
      return (
        <p className="notion-paragraph">
          <RichText richText={block.paragraph?.rich_text ?? []} />
        </p>
      );

    case "heading_1":
      return (
        <h1 className="notion-h1">
          <RichText richText={block.heading_1?.rich_text ?? []} />
        </h1>
      );

    case "heading_2":
      return (
        <h2 className="notion-h2">
          <RichText richText={block.heading_2?.rich_text ?? []} />
        </h2>
      );

    case "heading_3":
      return (
        <h3 className="notion-h3">
          <RichText richText={block.heading_3?.rich_text ?? []} />
        </h3>
      );

    case "bulleted_list_item":
      return (
        <li className="notion-li">
          <RichText richText={block.bulleted_list_item?.rich_text ?? []} />
        </li>
      );

    case "numbered_list_item":
      return (
        <li className="notion-li notion-li-numbered">
          <RichText richText={block.numbered_list_item?.rich_text ?? []} />
        </li>
      );

    case "quote":
      return (
        <blockquote className="notion-quote">
          <RichText richText={block.quote?.rich_text ?? []} />
        </blockquote>
      );

    case "divider":
      return <hr className="notion-divider" />;

    case "image": {
      const url =
        block.image?.type === "external"
          ? block.image.external?.url
          : block.image?.file?.url;
      const caption = block.image?.caption?.[0]?.plain_text ?? "";
      if (!url) return null;
      return (
        <figure className="notion-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={caption} className="rounded-xl w-full" />
          {caption && <figcaption className="text-center text-sm mt-2 opacity-60">{caption}</figcaption>}
        </figure>
      );
    }

    default:
      return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NotionContent({ blocks }: { blocks: any[] }) {
  const elements: React.ReactNode[] = [];
  let bulletBuffer: any[] = [];
  let numberedBuffer: any[] = [];

  function flushBullets() {
    if (bulletBuffer.length) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="notion-ul">
          {bulletBuffer.map((b, i) => <NotionBlock key={i} block={b} />)}
        </ul>
      );
      bulletBuffer = [];
    }
  }

  function flushNumbered() {
    if (numberedBuffer.length) {
      elements.push(
        <ol key={`ol-${elements.length}`} className="notion-ol">
          {numberedBuffer.map((b, i) => <NotionBlock key={i} block={b} />)}
        </ol>
      );
      numberedBuffer = [];
    }
  }

  for (const block of blocks) {
    if (block.type === "bulleted_list_item") {
      flushNumbered();
      bulletBuffer.push(block);
    } else if (block.type === "numbered_list_item") {
      flushBullets();
      numberedBuffer.push(block);
    } else {
      flushBullets();
      flushNumbered();
      elements.push(<NotionBlock key={block.id} block={block} />);
    }
  }

  flushBullets();
  flushNumbered();

  return <div className="notion-content">{elements}</div>;
}
