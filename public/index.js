
document.addEventListener("DOMContentLoaded", ()=>{
    const rootElement = document.getElementById("root-element");

    rootElement.innerHTML = `
        <h1>Prelim Summative Test<br></h1>
    `
    const questionContainer = document.createElement('div');

    questionContainer.classList.add('question-container');

    rootElement.appendChild(questionContainer);

    
    const questionBtn = document.createElement('button');

    questionBtn.classList.add('question-btn');

    rootElement.appendChild(questionBtn);

    questionBtn.innerHTML = "Generate Question";
    
    let questionArray = [
        "What are Data and Information? What are their difference? ",
        "What is Information? ",
        "Give at least 2 characteristics of information. ",
        "What characteristics of information to be considered timely? ",
        "What is the difference of conciseness and accuracy? ",
        "What is a system? ",
        `Explain the components of a system? <ul><li>Input</li><li>Processing</li><li>Output</li><li>Feedback</li><li>Control</li></ul>`,
        `This is the score of activities in which its limited for viewing or accessing any module of the system. 
            Ex. Admin is the only one allowed to access the inventory system`,
        `True or False. Every system consists of subsystems the have different features`,
        "This is where we can access every subsystem. This is considered as the interface of the system.",
        `True or False. 
        Each system always needs feedback to be able to do its job and to process accurately based on the requirements. `,
        `What are the components of an information system? (Give all 5/6 of them) `,
        "What is a Transaction Processing System? ", 
        "What is a Supply Chain Management System? ",
        "What is a Customer Relationship Management System? ",
        "What is a Business Intelligence System? ",
        "What is a Decision Support System? ",
        "What is a Expert Support System? ",
        "It is also called waterfall development. It is consists of well-defined phases that are followed methodically. ",
        "What are the steps involved in System Analysis? ",
        "What is the importance of system design? ",
        "what is programming as a phase in SDLC? ",
        "Why testing phase is important in SDLC? ",
        "Why is Maintenance important in software development? ",
        "What is Ad Hoc Development? ",
        "What is the disadvantage of Waterfall Model? ",
        "This is an SDLC that assumes all the requirements are identified already. When using this SDLC, the developer builds a simplified version of the proposed system and presents it to the client",
        "What is Agile Development? ",
        "What is the meaning of the acronym 'DBMS'? ",
        "What is Sequential File Organization? ",
        "What is Direct/Random File Organization? ",
        "How can we access data using Index Sequential Access Method? ",
        "How can we access data using Direct File Access Method? ",
        "Why is the integration of information in a business/ organization is so difficult? ",
        "What is Enterprise Resource Planning (ERP)? ",
        "What is an Organization? ",
        "Why is People important in an Information System? ",
        "Why is Telecommunication important in an Information System? ",
        "It is a component of Information System that is used to follow rules and policies to ensure security measures. \nData\nHardware\nPeople\nProcedures",
        "What is a business process? Give Example",
        "What is Management Information System? ",
        "Why is IT important in an organization/company? ",
        "Why is Strategy so important in an enterprise? ",
        "How can you use Information System to gain advantage over a competitor? "
    ]
    
    const randomNumber =()=>{
        return Math.floor(Math.random() * questionArray.length);
    }
    
    const generateQuestion = ()=>{
        questionContainer.classList.add('flip-animation');
        questionContainer.innerHTML = `
            <h2>${questionArray[randomNumber()]}</h2>
        `
        
    }
    questionBtn.addEventListener("click", generateQuestion);


    questionContainer.addEventListener("animationend", ()=>{
        questionContainer.classList.remove('flip-animation');
    });
});