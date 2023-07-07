var messages = [
    'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.',
    'Everything that irritates us about others can lead us to an understanding of ourselves',
    'Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.',
    'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
    'I am not what happened to me, I am what I choose to become.',
    'You are what you do, not what you say you\'ll do.',
    'Loneliness does not come from having no people about one, but from being unable to communicate the things that seem important to oneself, or from holding certain views which others find inadmissible.',
    'Knowing your own darkness is the best method for dealing with the darknesses of other people.',
    'The privilege of a lifetime is to become who you truly are.',
    'There\'s no coming to consciousness without pain.'
]

function newMessage(){
    var randomNumber = Math.floor(Math.random()*10);
    console.log(randomNumber);
    document.getElementById('MessageDisplay').innerHTML = messages[randomNumber];
}