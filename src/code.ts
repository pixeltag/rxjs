import { Observable } from "rxjs";

const observable = Observable.create((observer: any) => {
  try {
    observer.next("Hello world !");
    observer.next("Learning Rxjs");
    setInterval(() => {
      observer.next("Learning Rxjs");
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

let observer = observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

setTimeout(() => {
  observer.unsubscribe();
}, 6000);

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
