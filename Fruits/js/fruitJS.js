$(document).ready(function(){

    var button = $('.content__button');
    var result = $('.content__result');
    var fruits = ["Яблоко",
                    "Абрикос",
                    "Баккорея Мотли",
                    "Малайское яблоко",
                    "Банан",
                    "Мандарин",
                    "Чернослив",
                    "Вишня",
                    "Ананас",
                    "Кокос",
                    "Лимон",
                    "Маракуйя",
                    "Крабовые палочки(??)",
                    "Нектарин",
                    "Слива",
                    "Огурец",
                    "Помидор",
                    "Морковь",
                    "Капуста",
                    "Гранат",
                    "Салак",
                    "Груша",
                    "Баклажан",
                    "Перец",
                    "Дыня",
                    "Кешью",
                    "Киви",
                    "Фиги",
                    "Фейхоа",
                    "Звёздчатое яблоко",
                    "Grape",
                    "Raisin",
                    "Grapefruit",
                    "Guava",
                    "Honeyberry",
                    "Huckleberry",
                    "Jabuticaba",
                    "Jackfruit",
                    "Jambul",
                    "Japanese plum",
                    "Jostaberry",
                    "Jujube",
                    "Juniper berry",
                    "Kiwano",
                    "Kiwifruit",
                    "Kumquat",
                    "Lemon",
                    "Lime",
                    "Loquat",
                    "Longan",
                    "Lychee",
                    "Mango",
                    "Mangosteen",
                    "Marionberry",
                    "Melon",
                    "Cantaloupe",
                    "Honeydew",
                    "Watermelon",
                    "Miracle fruit",
                    "Mulberry",
                    "Nectarine",
                    "Nance",
                    "Olive",
                    "Orange",
                    "Blood orange",
                    "Clementine",
                    "Mandarine",
                    "Tangerine",
                    "Papaya",
                    "Passionfruit",
                    "Peach",
                    "Pear",
                    "Persimmon",
                    "Plantain",
                    "Plum",
                    "Prune",
                    "Pineapple",
                    "Pineberry",
                    "Plumcot",
                    "Pomegranate",
                    "Pomelo",
                    "Purple mangosteen",
                    "Quince",
                    "Raspberry",
                    "Salmonberry",
                    "Rambutan",
                    "Redcurrant",
                    "Salal berry",
                    "Salak",
                    "Satsuma",
                    "Soursop",
                    "Star apple",
                    "Star fruit",
                    "Strawberry",
                    "Surinam cherry",
                    "Tamarillo",
                    "Tamarind",
                    "Ugli fruit",
                    "White currant",
                    "White sapote",
                    "Yuzu"];
    var fruitsRandom = [];
    button.on("click", function(){
        var randomFruitNum = Math.floor(Math.random() * 202);
        var randomFruit = Math.floor(Math.random() * 100);
        var fruitsCount = 0;
       for(var i = 0; i < 200; i+=2){
           fruitsCount++;
           fruitsRandom[i] = fruits[fruitsCount];
           fruitsRandom[i+1] = fruits[fruitsCount];
       };
       var chosedFruit = fruits[randomFruit];
       for(var i = 0; i < 200; i++){
            if(fruitsRandom[i] == chosedFruit){
                delete fruitsRandom[i];
            };
       };
       fruitsRandom.splice(randomFruitNum, 0, chosedFruit);
       result.html("Случайный не парный фрукт: " + chosedFruit + "<br>Поместился в: " + randomFruitNum + " элемент.")
       console.log(fruitsRandom);
    });

});