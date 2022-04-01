export default function setNewTaskPattern(task, category) {
  const date = new Date().toLocaleDateString().split('/');
  return {
    task,
    category,
    date: `${date[1] < 10 ? `0${date[1]}` : `${date[1]}`}-${
      date[0] < 10 ? `0${date[0]}` : `${date[0]}`
    }-${date[2]}`,
  };
}
