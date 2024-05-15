class Question {
    constructor(text, answers) {
        this.text = text || ""; // Default value is an empty string
        this.answers = answers || []; // Default value is an empty array
    }
}

class QuestionList {
    constructor() {
        this.arrQuestions = [];
    }
    
    setQuestions() {
        this.arrQuestions.push(new Question("Name something you put on a sandwich:", ["Bread", "Meat", "Cheese", "Lettuce", "Mustard", "Mayo", "Pickles", "Tomato"]));
        this.arrQuestions.push(new Question("Name something you might find at the beach:", ["Sand", "Water", "Shells", "Seagulls", "Sunscreen", "Towel", "Waves", "Umbrella"]));
        this.arrQuestions.push(new Question("Name something you do to relax:", ["Watch TV", "Read a book", "Listen to music", "Take a nap", "Go for a walk", "Meditate", "Spend time with friends", "Play video games"]));
        this.arrQuestions.push(new Question("Name a type of transportation:", ["Car", "Bus", "Train", "Airplane", "Bike", "Scooter", "Taxi", "Boat"]));
        this.arrQuestions.push(new Question("Name something found in a kitchen:", ["Stove", "Refrigerator", "Sink", "Cabinets", "Microwave", "Dishes", "Pots and Pans", "Utensils"]));
        this.arrQuestions.push(new Question("Name a type of candy:", ["Chocolate", "Gummy bears", "Sours", "Lollipop", "Hard candy", "Chewing gum", "Licorice", "Mints"]));
        this.arrQuestions.push(new Question("Name a household chore:", ["Clean dishes", "Do laundry", "Vacuum", "Dust", "Take out the trash", "Fold clothes", "Mow the lawn", "Water the plants"]));
        this.arrQuestions.push(new Question("Name a social media platform:", ["Facebook", "Instagram", "Twitter", "TikTok", "YouTube", "Snapchat", "Pinterest", "Reddit"]));
        this.arrQuestions.push(new Question("Name a type of clothing:", ["Shirt", "Pants", "Dress", "Jeans", "Shoes", "Hat", "Jacket", "Socks"]));
        this.arrQuestions.push(new Question("Name a movie genre:", ["Comedy", "Action", "Drama", "Romance", "Sci-Fi", "Animation", "Horror", "Thriller"]));
        this.arrQuestions.push(new Question("Name something you do on your birthday:", ["Eat cake", "Open presents", "Sing Happy Birthday", "Go out to dinner", "Have a party", "Spend time with family", "Get a card", "Blow out candles"]));
        this.arrQuestions.push(new Question("Name something you find in a classroom:", ["Desk", "Chair", "Blackboard/Whiteboard", "Books", "Pencils", "Teacher", "Backpack", "Globe"]));
        this.arrQuestions.push(new Question("Name a type of fruit:", ["Apple", "Orange", "Banana", "Grape", "Strawberry", "Watermelon", "Blueberry", "Pineapple"]));
        this.arrQuestions.push(new Question("Name something you might see at a zoo:", ["Lion", "Tiger", "Elephant", "Giraffe", "Monkey", "Zebra", "Panda", "Snake"]));
        this.arrQuestions.push(new Question("Name a household appliance:", ["Vacuum cleaner", "Washing machine", "Dryer", "Toaster", "Coffee maker", "Blender", "Hair dryer", "Refrigerator"]));
        this.arrQuestions.push(new Question("Name something you wear in the rain:", ["Umbrella", "Raincoat", "Boots", "Hat", "Gloves", "Scarf", "Rain jacket", "Rain pants"]));
        this.arrQuestions.push(new Question("Name a famous landmark:", ["Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Colosseum", "Buckingham Palace", "Leaning Tower of Pisa", "Big Ben", "Taj Mahal"]));
        this.arrQuestions.push(new Question("Name a job title:", ["Doctor", "Teacher", "Nurse", "Lawyer", "Police officer", "Firefighter", "Engineer", "Chef"]));
        this.arrQuestions.push(new Question("Name a type of sport:", ["Football", "Basketball", "Baseball", "Soccer", "Tennis", "Swimming", "Hockey", "Golf"]));
        this.arrQuestions.push(new Question("Name a brand of clothing:", ["Nike", "Adidas", "Under Armour", "Levis", "H&M", "Gap", "American Eagle", "Old Navy"]));
        this.arrQuestions.push(new Question("Name a type of cheese:", ["Cheddar", "Mozzarella", "Parmesan", "Swiss", "Feta", "Brie", "Goat cheese", "Ricotta"]));
        this.arrQuestions.push(new Question("Name a scary movie monster:", ["Ghost", "Vampire", "Werewolf", "Zombie", "Alien", "Mummy", "Frankenstein", "Witch"]));
        this.arrQuestions.push(new Question("Name something you do on vacation:", ["Relax on the beach", "Go sightseeing", "Visit museums", "Go hiking", "Explore a new city", "Go shopping", "Try new foods", "Attend a concert"]));
        this.arrQuestions.push(new Question("Name a video game genre:", ["Strategy", "Role-playing", "Puzzle", "First-person shooter", "Open world", "Racing", "Simulation", "Sports"]));
        this.arrQuestions.push(new Question("Name something you find in a park:", ["Playground", "Trees", "Benches", "Walking path", "Pond", "Picnic tables", "Public restrooms", "Dog park"]));
        this.arrQuestions.push(new Question("Name a breakfast food:", ["Eggs", "Bacon", "Cereal", "Toast", "Pancakes", "Yogurt", "Fruit", "Oatmeal"]));
        this.arrQuestions.push(new Question("Name a type of music:", ["Pop", "Rock", "Hip-hop", "Country", "R&B", "Electronic", "Classical", "Jazz"]));
        this.arrQuestions.push(new Question("Name a tool you might find in a toolbox:", ["Hammer", "Screwdriver", "Wrench", "Saw", "Pliers", "Tape measure", "Level", "Drill"]));
        this.arrQuestions.push(new Question("Name something you write with:", ["Pen", "Pencil", "Marker", "Crayon", "Paintbrush", "Keyboard", "Typewriter", "Chalk"]));
        this.arrQuestions.push(new Question("Name a type of flower:", ["Rose", "Lily", "Daisy", "Tulip", "Sunflower", "Orchid", "Carnation", "Hydrangea"]));
        this.arrQuestions.push(new Question("Name a type of pasta:", ["Spaghetti", "Macaroni", "Penne", "Lasagna", "Fettuccine", "Ravioli", "Tortellini", "Gnocchi"]));
        this.arrQuestions.push(new Question("Name something you find in a hospital:", ["Doctor", "Nurse", "Patient", "Bed", "Medicine", "Wheelchair", "Bandage", "IV drip"]));
        this.arrQuestions.push(new Question("Name a holiday in the United States:", ["Thanksgiving", "Christmas", "New Year's Day", "Independence Day", "Memorial Day", "Labor Day", "Halloween", "Valentine's Day"]));
        this.arrQuestions.push(new Question("Name a type of beverage:", ["Water", "Coffee", "Tea", "Soda", "Juice", "Milk", "Wine", "Beer"]));
        this.arrQuestions.push(new Question("Name a household item made of plastic:", ["Cups", "Plates", "Containers", "Bottles", "Bags", "Utensils", "Toys", "Furniture"]));
        this.arrQuestions.push(new Question("Name a type of tree:", ["Oak", "Maple", "Pine", "Palm", "Willow", "Birch", "Apple", "Cherry"]));
        this.arrQuestions.push(new Question("Name something you do at the gym:", ["Lift weights", "Run on a treadmill", "Use an elliptical machine", "Bike", "Do yoga", "Take a class", "Swim", "Stretch"]));
        this.arrQuestions.push(new Question("Name a famous cartoon character:", ["Mickey Mouse", "Bugs Bunny", "SpongeBob SquarePants", "Scooby-Doo", "Elsa (Frozen)", "Homer Simpson", "Snoopy", "Superman"]));
        this.arrQuestions.push(new Question("Name a school subject:", ["Math", "English", "Science", "History", "Social studies", "Art", "Music", "Physical education"]));
        this.arrQuestions.push(new Question("Name a common fear:", ["Spiders", "Heights", "Public speaking", "Closed spaces", "Snakes", "Dogs", "Failure", "Death"]));
        this.arrQuestions.push(new Question("Name a type of vegetable:", ["Carrot", "Potato", "Tomato", "Onion", "Lettuce", "Broccoli", "Cucumber", "Corn"]));
        this.arrQuestions.push(new Question("Name a famous book:", ["Harry Potter series", "To Kill a Mockingbird", "The Lord of the Rings trilogy", "The Hunger Games trilogy", "The Great Gatsby", "Pride and Prejudice", "The Catcher in the Rye", "The Book"]));    
    }

    getQuestions(){
        return this.arrQuestions;
    }
}
