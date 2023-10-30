let subjectValue, toVlaue, files;

// chrome.identity.getProfileUserInfo(function (profile) {
//   console.log("profile", profile);
// });

var composeButtonClick = () => {
  setTimeout(() => {
    // get the dom of to and subject
    var to = document.getElementsByClassName("agP aFw");
    var subject = document.getElementsByClassName("aoT");

    // add event listener for to and subject
    to[0].addEventListener("change", toValueChange);
    subject[0].addEventListener("change", subjectValueChange);

    //get the dom of send button
    var sendButton = document.getElementsByClassName(
      "T-I J-J5-Ji aoO v7 T-I-atl L3"
    );
    // add event listener for the send button

    sendButton[0].addEventListener("click", sendButtonClick);
  }, 1000);
};

var toValueChange = (event) => {
  toValue = event.target.value;
};

var subjectValueChange = (event) => {
  subjectValue = event.target.value;
};

var sendButtonClick = () => {
  var files = document.querySelectorAll('[name="Filedata"]');
  console.log("files", files[0].files);

  let sendObjectData = {
    to: toValue,
    subject: subjectValue,
    files: files[0].files,
  };

  console.log("adsfadsf", sendObjectData);
};

window.addEventListener(
  "load",
  function load(event) {
    window.removeEventListener("load", load, false); //remove listener, no longer needed

    var composeButton = document.getElementsByClassName("T-I T-I-KE L3");
    composeButton[0].addEventListener("click", composeButtonClick);
  },
  false
);
