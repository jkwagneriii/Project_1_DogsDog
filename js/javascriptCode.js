// lifestyle options page

//time in the navbar possibly weather in the navbar

// get one lifestyle fully functional
// have 4+ images where lifestyles are pictured
// have a brief description of the lifestyles for desktop users

// put each image in a div on the index.html link each image to a corresponding .html in the common folder

// Ryan’s API KEY - “e999b8a7-faae-4667-b727-40d705c95128”;
// Michael’s API KEY -”9d02042e-90ac-4a0d-adea-b9015a48ac25”;
// Jake’s API KEY - “112a81f5-749e-42b8-bb81-5a44abe76376”;
// Documentation: https://docs.thedogapi.com/

//working thedogapi.com code
// var apiKey = "e999b8a7-faae-4667-b727-40d705c95128"
// var breedName = "german"

// var settings = {
//   async: true,
//   crossDomain: true,
//   url: `https://api.thedogapi.com/v1/breeds/search?q=${breedName}`, // template literal (the backticks) runs the code within the ${}. This is not jquery ${} it is a generic javascript ${}
//   method: "GET",
//   headers: {
//     "x-api-key": apiKey,
//   },
// };

// $.ajax(settings).then(function (response) {
//   console.log(response);

// });

// working dog.ceo code

// var randomImage = "https://dog.ceo/api/breed/hound/images/random"

// $.ajax({
//   url: randomImage,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });

var activeImageEl = $("<img>");
activeImageEl.addClass("index-images");
activeImageEl.attr(
  "src",
  "https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
);
$("#attribute-images").append(activeImageEl);


// somethign