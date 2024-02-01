function BaseHead(props) {
  const { title, description } = props;
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="description" content={description} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

      <link rel="stylesheet" href="/css/output.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <title>{title}</title>
    </>
  );
}

export default BaseHead;
