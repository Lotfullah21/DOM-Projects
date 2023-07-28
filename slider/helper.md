<h3>Truthy and Falsy</h3>
<p> the out of a condition can be determined whether a value is true or false.
for example <code>string=""</code>(empty string) is a flase value or falsy</p>

<code>
let editElement;
let editFlag = true;
let editID = "";

function addItem(e) {
e.preventDefault();
console.log(subjects.value);
const value = subjects.value;
const id = new Date().getTime().toString();
if (value !== "" && editFlag === false) {
console.log("add item to the list");
} else if (value !== "" && editFlag === true) {
console.log("editing");
} else {
console.log("nothing");
}
console.log(id, value);
}
</code>
