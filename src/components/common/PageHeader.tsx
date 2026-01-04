export default function PageHeader({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 0,
          lineHeight: "initial",
        }}
      >
        {title}
      </h1>
      {subTitle ? (
        <p style={{ color: "#64748B", marginBottom: 0, lineHeight: "initial" }}>
          {subTitle}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
