const student = {
  name: "Davidd",
  sclass: "VI",
  rollno: 12,
};
function deleteKeyFromObject(object, key) {
  console.log("original", object);

  delete object[key];

  console.log("updated", object);
}

const deleteKey = "rollno";
deleteKeyFromObject(student, deleteKey);
