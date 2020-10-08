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

// working thedogapi.com code
var apiKey = "e999b8a7-faae-4667-b727-40d705c95128";

$("button").on("click", function () {
  // grabs the breed name from the button text
  var breedName = $(this).text();
  // converts button text to lower case to use in API URL
  breedName = breedName.toLowerCase();

  var settings = {
    async: true,
    crossDomain: true,
    url: `https://api.thedogapi.com/v1/breeds/search?q=${breedName}`, // template literal (the backticks) runs the code within the ${}. This is not jquery ${} it is a generic javascript ${}
    method: "GET",
    headers: {
      "x-api-key": apiKey,
    },
  };

  // call for object containing dog breed information
  $.ajax(settings).then(function (response) {
    // console.log(response);
    // An array that contains wanted objects from the ajax call.
    var breedInfoArray = [
      // response[0].name,
      response[0].bred_for,
      response[0].breed_group,
      response[0].height.imperial,
      response[0].life_span,
      response[0].temperament,
      response[0].weight.imperial,
      response[0].temperament,
    ];
    // a for loop that creates list elements to append text to the page on button click.
    for (let index = 0; index < breedInfoArray.length; index++) {
      const element = breedInfoArray[index];
      var liBreedInfo = $("<li>").text(element);
      $(".dog-info-container").append(liBreedInfo);
    }
  });
});

// Listens for a button to be clicked on the .html.
$("button").on("click", function () {
  // grabs the breed name from the button text
  var breed = $(this).text();
  // converts button text to lower case to use in API URL
  breed = breed.toLowerCase();
  var randomImage = "https://dog.ceo/api/breed/" + breed + "/images/random";

  $.ajax({
    url: randomImage,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // empties the .dog-pic-container class of it's values (pictures)
    $(".dog-pic-container").empty();

    //create an <img>

    var image = $("<img>");

    // add the image src & a class
    image.attr("src", response.message);
    image.addClass("dog-pic");

    //puts image at the bottom of dog-pic-container
    $(".dog-pic-container").append(image);
  });
});
