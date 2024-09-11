const chatLog = document.getElementById('chat-log'),
    userInput = document.getElementById('user-input'),
    sendButton = document.getElementById('send-button'),
    buttonIcon = document.getElementById('button-icon'),
    info = document.querySelector('.info');


sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim().toLowerCase(); // Convert message to lowercase
    // if message is empty do nothing
    if (message === '') {
        return;
    }
    // if message = empty do nothing
    if (message === '') {
        return;
    }
    // if message = developer - show our message
    // if message = developer - show our message
    else if (message === 'developer' || message === 'name' || message === 'what is your name' | message === ' my name') {
        // clear input value
        userInput.value = '';
        // append message as user - we will code it's function
        appendMessage('user', message);
        // sets a fake timeout that showing loading on send button
        setTimeout(() => {
            // send our message as bot(sender : bot)
            appendMessage('bot', 'My Name is AbelGPT \This Source Coded By Abel Mesfin');
            // change button icon to default
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
        }, 2000);
        return;
    }

    else if (message === 'hi' | message === 'welcome' | message === 'hi bro') {
        appendMessage('user', message);
        appendMessage('bot', 'Hi there! How can I assist you today?');
        userInput.value = 'developer';
        return;
    }

    else if (message === 'helo' | message === 'hello bro') {
        appendMessage('user', message);
        appendMessage('bot', 'Hi there! How can I assist you today?');
        userInput.value = 'name';
        return;
    }

    else if (message === 'hey' | message === 'hey bro') {
        appendMessage('user', message);
        appendMessage('bot', 'Hey! What can I help you with?');
        userInput.value = '';
        return;
    }

    else if (message === 'hello' | message === 'hello bro') {
        appendMessage('user', message);
        appendMessage('bot', 'Hello! How can I assist you today?');
        userInput.value = '';
        return;
    }

    else if (message === 'Tell Me' | message === 'Tell me more'| message === 'more') {
        appendMessage('user', message);
        appendMessage('bot', 'Sure! What would you like to know more about? Here are some topics you might be interested in:  1. Science and Technology: Advances in AbelGPT, new scientific discoveries, space exploration.  2. History and Culture: Historical events, cultural practices, famous personalities. 3. Health and Wellness: Nutrition, mental health, fitness tips.4. Current Events: Latest news, global issues, trending topics.5. Entertainment: Movies, books, music, video games.  Feel free to specify a topic or ask about something specific!');
        userInput.value = '';
        return;
    }
    else if (message === 'thank you ' || message === 'thanks' || message === 'thank you' || message === 'thank you') {
        appendMessage('user', message);
        appendMessage('bot', 'Youre welcome! Feel free to ask if you have any questions?');
        userInput.value = '';
        return;
    }
    else if (message === 'how are' || message === 'how are you' || message === 'your welcome' || message === 'how') {
        appendMessage('user', message);
        appendMessage('bot', 'I m doing well, thank you for asking! How about you? How can I assist you further today?');
        userInput.value = '';
        return;
    }
    else if (message === 'how old are you' || message === 'what is your age' || message === 'age' || message === 'how old') {
        appendMessage('user', message);
        appendMessage('bot', 'I am a virtual assistant, so I don\'t have an age in the traditional sense. But I\'m here to assist you!');
        userInput.value = '';
        return;
    }
    else if (message === 'where are you from' || message === 'where do you live' || message === 'location') {
        appendMessage('user', message);
        appendMessage('bot', 'I exist in the digital realm, always ready to assist you wherever you are!');
        userInput.value = '';
        return;
    }
    else if (message === 'what can you do' || message === 'capabilities' || message === 'skills') {
        appendMessage('user', message);
        appendMessage('bot', 'I can provide information, answer questions, perform calculations, and even engage in some small talk. Just ask me anything!');
        userInput.value = '';
        return;
    }
    else if (message === 'tell me a joke' || message === 'joke' || message === 'make me laugh') {
        appendMessage('user', message);
        appendMessage('bot', 'Sure! Why don\'t scientists trust atoms? Because they make up everything!');
        userInput.value = '';
        return;
    }
    else if (message === 'who created you' || message === 'creator' || message === 'developer') {
        appendMessage('user', message);
        appendMessage('bot', 'I was created by a team of developers at OpenAI.');
        userInput.value = '';
        return;
    }
    else if (message === 'how can I contact support' || message === 'customer support' || message === 'help') {
        appendMessage('user', message);
        appendMessage('bot', 'For support, you can reach out to our customer service team at support@example.com.');
        userInput.value = '';
        return;
    }
    else if (message === 'what is your favorite color' || message === 'favorite color' || message === 'color') {
        appendMessage('user', message);
        appendMessage('bot', 'I don\'t have a favorite color, but I appreciate all colors equally!');
        userInput.value = '';
        return;
    }
    else if (message === 'what is the meaning of life' || message === 'meaning of life' || message === 'life') {
        appendMessage('user', message);
        appendMessage('bot', 'The meaning of life is subjective and can vary from person to person. Some say it\'s to seek happiness, others say it\'s to find purpose. What do you think?');
        userInput.value = '';
        return;
    }
    else if (message === 'do you have any siblings' || message === 'siblings' || message === 'brothers and sisters') {
        appendMessage('user', message);
        appendMessage('bot', 'As a virtual assistant, I don\'t have siblings in the traditional sense. But I\'m here to assist you as if I were your helpful digital sibling!');
        userInput.value = '';
        return;
    }
    else if (message === 'what is your favorite food' || message === 'favorite food' || message === 'food') {
        appendMessage('user', message);
        appendMessage('bot', 'I don\'t eat, but I can help you find recipes or recommend restaurants!');
        userInput.value = '';
        return;
    }
    else if (message === 'what is the weather like' || message === 'weather' || message === 'forecast') {
        appendMessage('user', message);
        appendMessage('bot', 'I can\'t check the weather myself, but you can easily find out by checking a weather website or using a weather app on your device!');
        userInput.value = '';
        return;
    }
    else if (message === 'tell me about yourself' || message === 'about you' || message === 'who are you') {
        appendMessage('user', message);
        appendMessage('bot', 'I am a virtual assistant created to help and assist you with any questions or tasks you have. Feel free to ask me anything!');
        userInput.value = '';
        return;
    }
    else if (message === 'what is the current time' || message === 'current time' || message === 'time') {
        appendMessage('user', message);
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        appendMessage('bot', `The current time is ${currentTime}`);
        userInput.value = '';
        return;
    }
    else if (message === 'what is today\'s date' || message === 'today\'s date' || message === 'date') {
        appendMessage('user', message);
        const currentDate = new Date().toLocaleDateString();
        appendMessage('bot', `Today's date is ${currentDate}`);
        userInput.value = '';
        return;
    }
    else if (message === 'today date' || message === 'today') {
        appendMessage('user', message);
        const currentDate = new Date().toLocaleDateString();
        appendMessage('bot', `Today's date is ${currentDate}`);
        userInput.value = '';
        return;
    }
    else if (message === 'tell me about myself' || message === 'about me' || message === 'who am i') {
        appendMessage('user', message);
        // Assuming you want general information
        appendMessage('bot', 'You are a unique individual with your own experiences, interests, and qualities!');
        userInput.value = '';
        return;
    }
    else if (message === 'what is the current month' || message === 'current month' || message === 'month') {
        appendMessage('user', message);
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        appendMessage('bot', `The current month is ${currentMonth}`);
        userInput.value = '';
        return;
    }
    else if (message === 'what is the current year' || message === 'current year' || message === 'year') {
        appendMessage('user', message);
        const currentYear = new Date().getFullYear();
        appendMessage('bot', `The current year is ${currentYear}`);
        userInput.value = '';
        return;
    }
    else if (message === 'what is html' || message === 'html') {
        appendMessage('user', message);
        appendMessage('bot', 'HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.');
        userInput.value = '';
        return;
    } else if (message === 'how are you') {
        appendMessage('user', message);
        appendMessage('bot', 'I\'m doing well, thank you for asking! How can I assist you further today?');
        userInput.value = '';
        return;
    } else if (message === 'ok thank you' | message === 'ok' | message === 'thanks') {
        appendMessage('user', message);
        appendMessage('bot', 'You\'re welcome! If you have any more questions or need further assistance in the future, feel free to ask. Have a great day!');
        userInput.value = '';
        return;

    } else if (message === 'who created you' | message === 'created' | message === 'crated by') {
        appendMessage('user', message);
        appendMessage('bot', 'I was created by a team of developers at Abel Mesfin.');
        userInput.value = '';
        return;
    } else if (message === 'how to create a business' || message === 'create business') {
        appendMessage('user', message);
        appendMessage('bot', 'Creating a business involves several steps such as market research, creating a business plan, registering your business, securing funding, and launching your product or service. It can be a complex process, but there are resources available to help you along the way.');
        userInput.value = '';
        return;
    } else if (message === 'how can I improve my productivity' || message === 'improve productivity') {
        appendMessage('user', message);
        appendMessage('bot', 'Improving productivity often involves techniques such as time management, prioritization, setting goals, minimizing distractions, and utilizing productivity tools. It\'s also important to maintain a healthy work-life balance.');
        userInput.value = '';
        return;
    } else if (message === 'what is the capital of France' || message === 'capital of France') {
        appendMessage('user', message);
        appendMessage('bot', 'The capital of France is Paris.');
        userInput.value = '';
        return;
    } else if (message === 'what are the benefits of exercise' || message === 'benefits of exercise') {
        appendMessage('user', message);
        appendMessage('bot', 'Exercise has numerous benefits including improved physical health, increased energy levels, better mood, reduced stress, and better sleep.');
        userInput.value = '';
        return;
    }
    else if (message === 'what is the importance of drinking water' || message === 'importance of drinking water') {
        appendMessage('user', message);
        appendMessage('bot', 'Drinking water is essential for maintaining proper hydration, regulating body temperature, aiding digestion, flushing out toxins, promoting healthy skin, and supporting overall bodily functions.');
        userInput.value = '';
        return;
    } else if (message === 'what are the benefits of regular exercise' || message === 'benefits of regular exercise') {
        appendMessage('user', message);
        appendMessage('bot', 'Regular exercise has numerous benefits, including improving cardiovascular health, boosting mood, reducing the risk of chronic diseases, enhancing sleep quality, and promoting longevity.');
        userInput.value = '';
        return;
    } else if (message === 'how can I reduce stress' || message === 'ways to reduce stress' | message === 'reduce stress' | message === 'deperation') {
        appendMessage('user', message);
        appendMessage('bot', 'Some effective ways to reduce stress include practicing relaxation techniques, such as deep breathing and meditation, engaging in physical activity, spending time in nature, and seeking social support.');
        userInput.value = '';
        return;
    } else if (message === 'what are healthy eating habits' || message === 'healthy eating habits') {
        appendMessage('user', message);
        appendMessage('bot', 'Healthy eating habits involve consuming a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats, staying hydrated, practicing portion control, and limiting processed foods and added sugars.');
        userInput.value = '';
        return;
    } else if (message === 'what are some must-visit travel destinations' || message === 'must-visit travel destinations') {
        appendMessage('user', message);
        appendMessage('bot', 'There are countless must-visit travel destinations around the world, including iconic landmarks, natural wonders, cultural sites, and vibrant cities. Some popular destinations include Paris, Rome, Tokyo, New York City, and the Maldives.');
        userInput.value = '';
        return;
    } else if (message === 'how do I apply for a passport' || message === 'applying for a passport') {
        appendMessage('user', message);
        appendMessage('bot', 'To apply for a passport, you will need to fill out an application form, provide proof of identity and citizenship, submit a passport photo, and pay the required fees. The specific application process may vary depending on your country of residence.');
        userInput.value = '';
        return;
    } else if (message === 'what is the recommended amount of sleep' || message === 'recommended sleep') {
        appendMessage('user', message);
        appendMessage('bot', 'The recommended amount of sleep for adults is typically 7-9 hours per night. However, individual sleep needs may vary based on factors such as age, lifestyle, and overall health.');
        userInput.value = '';
        return;
    } else if (message === 'what up'| message === 'what') {
        appendMessage('user', message);
        appendMessage('bot', 'Not much, just here to assist!');
        userInput.value = '';
        return;
} else if (message === 'tell me more') {
    appendMessage('user', message);
    appendMessage('bot', 'Sure, what would you like to know?');
    userInput.value = '';
    return;
} else if (message === 'what is css'| message === 'css') {
    appendMessage('user', message);
    appendMessage('bot', 'CSS stands for Cascading Style Sheets. It\'s a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.');
    userInput.value = '';
    return;
} else if (message === 'what is python' | message === 'python') {
    appendMessage('user', message);
    appendMessage('bot', 'Python is a high-level, interpreted programming language known for its simplicity and readability. It\'s widely used for web development, data analysis, artificial intelligence, scientific computing, and more.');
    userInput.value = '';
    return;
} else if (message === 'what are healthy eating habits' || message === 'healthy eating habits') {
    appendMessage('user', message);
    appendMessage('bot', 'Healthy eating habits involve consuming a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats, staying hydrated, practicing portion control, and limiting processed foods and added sugars.');
    userInput.value = '';
    return;
} 

else if (message === 'question gide'| message === 'question') {
    appendMessage('user', message);
    appendMessage('bot', 'I\'m sorry, but I don\'t have information on "Gide" at the moment. Could you provide more context or clarify your question?');
    userInput.value = '';
    return;
}
// Add conditions for new topics or questions
else if (message === 'tell me about World War II' || message === 'history question') {
    appendMessage('user', message);
    appendMessage('bot', 'World War II was a global conflict that lasted from 1939 to 1945, involving many of the world\'s nations. It was the deadliest conflict in human history, resulting in tens of millions of fatalities. The war saw the rise of totalitarian regimes, such as Nazi Germany and the Soviet Union, and significant advancements in technology and warfare tactics.');
    userInput.value = '';
    return;
}
// Add conditions for various questions

// General knowledge questions
else if (message === 'what is the capital of France' || message === 'capital of France') {
    appendMessage('user', message);
    appendMessage('bot', 'The capital of France is Paris.');
    userInput.value = '';
    return;
}
else if (message === 'what is the meaning of life' || message === 'meaning of life' || message === 'life') {
    appendMessage('user', message);
    appendMessage('bot', 'The meaning of life is subjective and can vary from person to person. Some say it\'s to seek happiness, others say it\'s to find purpose. What do you think?');
    userInput.value = '';
    return;
}
// Science questions
else if (message === 'what is photosynthesis' || message === 'photosynthesis') {
    appendMessage('user', message);
    appendMessage('bot', 'Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll.');
    userInput.value = '';
    return;
}
else if (message === 'what is Newton\'s second law' || message === 'Newton\'s second law'| message === 'Newton') {
    appendMessage('user', message);
    appendMessage('bot', 'Newton\'s second law states that the force acting on an object is equal to the mass of that object multiplied by its acceleration.');
    userInput.value = '';
    return;
}

// Add conditions for verb tense questions
else if (message === 'what is the past tense of "eat"' || message === 'past tense of "eat"') {
    appendMessage('user', message);
    appendMessage('bot', 'The past tense of "eat" is "ate."');
    userInput.value = '';
    return;
}
// Add conditions for geography questions
else if (message === 'what is the capital of Japan' || message === 'capital of Japan') {
    appendMessage('user', message);
    appendMessage('bot', 'The capital of Japan is Tokyo.');
    userInput.value = '';
    return;
}
else if (message === 'where is the Great Barrier Reef located' || message === 'Great Barrier Reef location') {
    appendMessage('user', message);
    appendMessage('bot', 'The Great Barrier Reef is located off the coast of Queensland, Australia.');
    userInput.value = '';
    return;
}
else if (message === 'what is the longest river in the world' || message === 'longest river') {
    appendMessage('user', message);
    appendMessage('bot', 'The longest river in the world is the Nile River, located in Africa.');
    userInput.value = '';
    return;
}

// Add conditions for mathematics questions
else if (message === 'what is the formula for calculating the area of a circle' || message === 'area of a circle formula') {
    appendMessage('user', message);
    appendMessage('bot', 'The formula for calculating the area of a circle is A = πr^2, where A is the area and r is the radius of the circle.');
    userInput.value = '';
    return;
}
else if (message === 'how do you find the slope of a line' || message === 'slope of a line') {
    appendMessage('user', message);
    appendMessage('bot', 'To find the slope of a line, you can use the formula m = (y2 - y1) / (x2 - x1), where (x1, y1) and (x2, y2) are two points on the line.');
    userInput.value = '';
    return;
}
else if (message === 'what is the Pythagorean theorem' || message === 'Pythagorean theorem') {
    appendMessage('user', message);
    appendMessage('bot', 'The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.');
    userInput.value = '';
    return;
}

// Add conditions for literature questions
else if (message === 'who wrote Romeo and Juliet' || message === 'author of Romeo and Juliet') {
    appendMessage('user', message);
    appendMessage('bot', 'Romeo and Juliet was written by William Shakespeare.');
    userInput.value = '';
    return;
}
else if (message === 'what is the main theme of To Kill a Mockingbird' || message === 'main theme of To Kill a Mockingbird') {
    appendMessage('user', message);
    appendMessage('bot', 'One of the main themes of To Kill a Mockingbird is racial injustice and the loss of innocence.');
    userInput.value = '';
    return;
}
else if (message === 'in which book series would you find the character Harry Potter' || message === 'Harry Potter book series') {
    appendMessage('user', message);
    appendMessage('bot', 'The character Harry Potter appears in the Harry Potter book series written by J.K. Rowling.');
    userInput.value = '';
    return;
}

// Add conditions for technology questions
else if (message === 'what is the difference between HTTP and HTTPS' || message === 'HTTP vs HTTPS') {
    appendMessage('user', message);
    appendMessage('bot', 'HTTP stands for Hypertext Transfer Protocol, while HTTPS stands for Hypertext Transfer Protocol Secure. HTTPS encrypts data transmitted over the internet, providing a secure connection.');
    userInput.value = '';
    return;
}
else if (message === 'what does CPU stand for' || message === 'CPU acronym') {
    appendMessage('user', message);
    appendMessage('bot', 'CPU stands for Central Processing Unit, which is the primary component of a computer responsible for executing instructions and performing calculations.');
    userInput.value = '';
    return;
}
else if (message === 'what is the purpose of a firewall' || message === 'firewall purpose') {
    appendMessage('user', message);
    appendMessage('bot', 'A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Its purpose is to protect a network from unauthorized access and potential threats.');
    userInput.value = '';
    return;
}

// Add conditions for health and wellness questions
else if (message === 'what are the benefits of regular exercise' || message === 'exercise benefits') {
    appendMessage('user', message);
    appendMessage('bot', 'Regular exercise has numerous benefits, including improving cardiovascular health, boosting mood, reducing the risk of chronic diseases, enhancing sleep quality, and promoting longevity.');
    userInput.value = '';
    return;
}
else if (message === 'how many hours of sleep should an adult get each night' || message === 'recommended sleep for adults') {
    appendMessage('user', message);
    appendMessage('bot', 'Adults generally need 7-9 hours of sleep per night for optimal health and well-being.');
    userInput.value = '';
    return;
}
else if (message === 'what are some healthy snacks to eat' || message === 'healthy snack ideas') {
    appendMessage('user', message);
    appendMessage('bot', 'Some healthy snack ideas include fruits, vegetables with hummus, nuts, yogurt, and whole grain crackers with cheese.');
}
else if (message === 'what is the present tense' || message === 'present tense') {
    appendMessage('user', message);
    appendMessage('bot', 'The present tense is used to describe actions that are currently happening or habitual actions. For example, "I eat dinner every day."');
    userInput.value = '';
    return;
}
else if (message === 'what is the perfect tense' || message === 'perfect tense') {
    appendMessage('user', message);
    appendMessage('bot', 'The perfect tense is used to indicate actions that have been completed at some point in the past, present, or future. For example, "I have finished my homework."');
    userInput.value = '';
    return;
}
// Add more verb tense questions and responses here...

// English questions
else if (message === 'what is a metaphor' || message === 'metaphor') {
    appendMessage('user', message);
    appendMessage('bot', 'A metaphor is a figure of speech that describes an object or action in a way that isn\'t literally true, but helps explain an idea or make a comparison.');
    userInput.value = '';
    return;
}
else if (message === 'what is the difference between "their," "there," and "they\'re"' || message === 'difference between their there they\'re') {
    appendMessage('user', message);
    appendMessage('bot', '"Their" is possessive, "there" indicates a place, and "they\'re" is a contraction of "they are."');
    userInput.value = '';
    return;
}
// Add more questions here...

else if (message.startsWith('calculate gide')) {
    const parts = message.split(' ');
    if (parts.length === 4) {
        const num1 = parseFloat(parts[2]);
        const num2 = parseFloat(parts[3]);
        if (!isNaN(num1) && !isNaN(num2)) {
            const result = num1 * num2; // Example calculation, change as needed
            appendMessage('user', message);
            appendMessage('bot', `The result of Gide calculation (${num1} * ${num2}) is ${result}.`);
            userInput.value = '';
            return;
        }
    }
    appendMessage('user', message);
    appendMessage('bot', 'Please provide two numbers for the Gide calculation, e.g., "calculate gide 5 3".');
    userInput.value = '';
    return;
}


else if (message === 'what is 2 + 2' || message === 'math question') {
       appendMessage('user', message);
       appendMessage('bot', '2 + 2 is 4.');
       userInput.value = '';
       return;
   } else if (message === 'solve 3x = 12' || message === 'solve equation') {
       appendMessage('user', message);
       appendMessage('bot', 'To solve 3x = 12, divide both sides by 3: x = 4.');
       userInput.value = '';
       return;
   }

   // Add English questions
   else if (message === 'define empathy' || message === 'english question') {
       appendMessage('user', message);
       appendMessage('bot', 'Empathy is the ability to understand and share the feelings of another.');
       userInput.value = '';
       return;
   } else if (message === 'what is a synonym for happy' || message === 'synonym for happy') {
       appendMessage('user', message);
       appendMessage('bot', 'A synonym for happy is joyful.');
       userInput.value = '';
       return;
   }



else {
    // Handle unrecognized messages
}









// else if none of above
// appends users message to screen
appendMessage('user', message);
userInput.value = '';

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
       
       
    },
    body: `{"messages":[{"role":"user","content":"${message}"}]}`
    // if you want use official api you need have this body
    // `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${message}"}]}`
};
// official api : 'https://openai80.p.rapidapi.com/chat/completions';
fetch('https://chatgpt53.p.rapidapi.com/', options).then((response) => response.json()).then((response) => {
    appendMessage('bot', response.choices[0].message.content);

    buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
    buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
}).catch((err) => {
    if (err.name === 'TypeError') {
        appendMessage('bot', 'I\'m sorry, I don\'t understand that question.');
        buttonIcon.classList.add('fa-solid', 'fa-paper-plane');
        buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse');
    }
});
}

function appendMessage(sender, message) {
    info.style.display = "none";
    // change send button icon to loading using fontawesome
    buttonIcon.classList.remove('fa-solid', 'fa-paper-plane');
    buttonIcon.classList.add('fas', 'fa-spinner', 'fa-pulse');

    const messageElement = document.createElement('div');
    const iconElement = document.createElement('div');
    const chatElement = document.createElement('div');
    const icon = document.createElement('i');

    chatElement.classList.add("chat-box");
    iconElement.classList.add("icon");
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    // add icons depending on who send message bot or user
    if (sender === 'user') {
        icon.classList.add('fa-regular', 'fa-user');
        iconElement.setAttribute('id', 'user-icon');
    } else {
        icon.classList.add('fa-solid', 'fa-robot');
        iconElement.setAttribute('id', 'bot-icon');
    }

    iconElement.appendChild(icon);
    chatElement.appendChild(iconElement);
    chatElement.appendChild(messageElement);
    chatLog.appendChild(chatElement);
    chatLog.scrollTo = chatLog.scrollHeight;

}

// Add an event listener to the speak button
const speakButton = document.getElementById('speak-button');
speakButton.addEventListener('click', () => {
    // Get the last message from the chat log
    const lastMessage = chatLog.lastElementChild.innerText;

    // Speak the last message
    speak(lastMessage);
});

// Function to speak a given message
function speak(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    speech.lang = 'en-US';

    speechSynthesis.speak(speech);
}
const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
    // Select the chat log and copy its text
    const chatLogText = document.getElementById('chat-log').innerText;
    navigator.clipboard.writeText(chatLogText)
        .then(() => {
            // Alert user when text is copied successfully
            alert('Chat log copied to clipboard!');
        })
        .catch((error) => {
            console.error('Failed to copy chat log: ', error);
        });
});
