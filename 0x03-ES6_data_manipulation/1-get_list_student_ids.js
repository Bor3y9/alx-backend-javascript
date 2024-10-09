export default function getListStudentIds(studends) {
  if (studends instanceof Array) {
    return studends.map((el) => el.id);
  }
  return [];
}
