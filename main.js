var images= [
    "https://st2.depositphotos.com/1005738/8635/v/600/depositphotos_86355908-stock-illustration-one-child-happy-family-people.jpg",
    "Mama photo.jpg",
    "Papa.JPG",
    "Nandi.jpg"
];

var names= [
    "Family Book", "Swapna Rani Sahu","Sushant Kumar Sahu","Nandika Sahu"
]

var i = 0;

function update()
{
    i++;
    var numbers_of_famiy_memebers_in_array= 3
    if(i>numbers_of_famiy_memebers_in_array)
    {
        i = 0
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}