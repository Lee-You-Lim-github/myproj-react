function BlogList({ blog }) {
  const { title } = blog;
  return (
    <div>
      <ul>
        <li>{title}</li>
      </ul>
    </div>
  );
}
export default BlogList;
