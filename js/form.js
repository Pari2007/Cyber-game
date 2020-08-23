class Form {
    constructor() {
        this.title = createElement("h2");
        this.button1 = createButton("Season1");
        this.button2 = createButton("Season2");
        //     this.beginbutton = createButton("Begin>")
    }

    display() {
        //1st screen
        console.log("abcff");
        this.title.html("Welcome to the world of cyber crime!");

        this.title.position(400, 150);


        this.button1.position(450, 300);
        this.button2.position(450, 400);
        this.button2.mousePressed(()=>{
            form2 = new Form2;
        })
        this.button1.mousePressed(() => {
            this.title.hide();
            this.button1.hide();
            this.button2.hide();

            var insights = createElement("h2");
            insights.html("Some hackers are after your digital life...secure it or lose it!");
            insights.position(450, 300);
            var proceedbutton = createButton("Proceed>");
            proceedbutton.position(500, 400);
            proceedbutton.mousePressed(() => {
                insights.hide();
                proceedbutton.hide();
                var intro = createElement("h2");
                intro.html("Season1:Episode1:Gmail Hacked!");
                intro.position(500, 400);
                var description = createElement("h3");
                description.html("Your Gmail account gets hacked by some fraudsters recover & Secure it!");
                description.position(500, 430);
                var beginbutton = createButton("Begin>");

                beginbutton.mousePressed(() => {
                    intro.hide();
                    description.hide();
                    beginbutton.hide();
                    var situation = createElement("h2");
                    situation.html("Someone has breached into your gmail account,What will you do?");
                    var OptionA = createButton("Call 911");
                    OptionA.position(100, 500);
                    var OptionB = createButton("go to Account Recovery page");
                    OptionB.position(100, 600);
                    var OptionC = createButton("Ask for assistance");
                    OptionC.position(300, 500);
                    var OptionD = createButton("Reset your phone");
                    OptionD.position(300, 600);
                    OptionA.mousePressed(() => {
                        var Adc = createElement("h2");
                        Adc.html("A-our report has been successfully registered under the cyber crime law, P.S.- It isn’t the correct thing to do at the moment")
                        Adc.position(500, 500);
                    });
                    OptionB.mousePressed(() => {
                        var Bdc = createElement("h2");
                        Bdc.html("B-You have recoverd your account successfully.You are on the right track…keep going!")
                        Bdc.position(500, 500);
                    });
                    OptionC.mousePressed(() => {
                        var Cdc = createElement("h2");
                        Cdc.html("You took assistance from a Cyber Security Personnel and he has told you to recover your email. ")
                        Cdc.position(500, 500);
                    });
                    OptionD.mousePressed(() => {
                        var Ddc = createElement("h2");
                        Ddc.html("Resetting your phone doesn’t have any connection with your Gmail hacking.")
                        Ddc.position(500, 500);

                    });
                    var Next1 = createButton("What's Next")
                    Next1.position(400, 300);
                    Next1.mousePressed(() => {
                        OptionA.hide();
                        OptionB.hide();
                        OptionC.hide();
                        OptionD.hide();
                        situation.hide();
                        Next1.hide();

                        var situation2 = createElement("h2");
                        situation2.html("How will you secure?");

                        var OptionA2 = createButton("2 factor verification");
                        OptionA2.position(100, 500);
                        var OptionB2 = createButton("Reset your phone.");
                        OptionB2.position(100, 600);
                        var OptionC2 = createButton("clear cookies and cache");
                        OptionC2.position(300, 500);
                        OptionA2.mousePressed(() => {
                            var Adc2 = createElement("h2");
                            Adc2.html("Now, your email account is partly secured")
                            Adc2.position(500, 500);
                        });
                        OptionB2.mousePressed(() => {
                            var Bdc2 = createElement("h2");
                            Bdc2.html("That will not help you in securing your email account.")
                            Bdc2.position(500, 500);
                        });
                        OptionC2.mousePressed(() => {
                            var Cdc2 = createElement("h2");
                            Cdc2.html("Clearing cookies and cache will promise you smooth functioning but if will not help you in securing your Email account.");
                            Cdc2.position(500, 500);
                        });
                        var Next2 = createButton("Next>")
                    Next2.position(400, 300);
                    Next2.mousePressed(() => {
                        OptionA2.hide();
                        OptionB2.hide();
                        OptionC2.hide();
                        situation2.hide();  
                        Next2.hide();
                        var situation3 = createElement("h2");
                        situation3.html("Which device do you suspect?Eliminate it.");

                        var OptionA3 = createButton("Tablet");
                        OptionA3.position(100, 500);
                        var OptionB3 = createButton("Phone");
                        OptionB3.position(100, 600);
                        var OptionC3 = createButton("PC");
                        OptionC3.position(300, 500);
                        var OptionD3 = createButton("Laptop");
                        OptionD3.position(300, 600);
                        OptionA3.mousePressed(() => {
                            var Adc3 = createElement("h2");
                            Adc3.html("Des. on answerA2")
                            Adc3.position(500, 500);
                        });
                        OptionB3.mousePressed(() => {
                            var Bdc3 = createElement("h2");
                            Bdc3.html("Des. on answerB2")
                            Bdc3.position(500, 500);
                        });
                        OptionC3.mousePressed(() => {
                            var Cdc3 = createElement("h2");
                            Cdc3.html("Des. on answerC2")
                            Cdc3.position(500, 500);
                        });
                        OptionD3.mousePressed(() => {
                            var Ddc3 = createElement("h2");
                            Ddc3.html("Des. on answerD2")
                            Ddc3.position(500, 500);

                        });

                        var beginE2 = createButton("Go!");
                        beginE2.mousePressed(()=>{
                            beginE2.hide();
                            situation3.hide()
                            OptionA3.hide()
                            OptionB3.hide()
                            OptionC3.hide()
                            OptionD3.hide()
                    });
                    var Next3 = createButton("Next>")
                    Next3.position(400, 300);
                    Next3.mousePressed(() => {
                        OptionA3.hide();
                        OptionB3.hide();
                        OptionC3.hide();
                        OptionD3.hide();
                        situation3.hide();  
                        Next3.hide();
                        var situation4 = createElement("h2");
                        situation4.html("Reset your Password.");
                        var password1 = createInput()
                        password1.input("Password");

                         

                 });
                

                 })
                // Episode 2
                var intro2 = createElement("h2");
                intro2.html("Season2:Episode2:Twitter and FB Hacked!");
                intro2.position(500, 400);
                var description2 = createElement("h3");
                description2.html("description about Episode2");
                description2.position(500, 430);
                var beginbutton2 = createButton("Begin>");

                beginbutton2.mousePressed(() => {
                    intro2.hide();
                    description2.hide();
                    beginbutton2.hide();
                    var situationE2 = createElement("h2");
                    situationE2.html("Situation");
                    var OptionAE2 = createButton("Option A");
                    OptionAE2.position(100, 500);
                    var OptionBE2 = createButton("Option B");
                    OptionBE2.position(100, 600);
                    var OptionCE2 = createButton("Option C");
                    OptionCE2.position(300, 500);
                    var OptionDE2 = createButton("Option D");
                    OptionDE2.position(300, 600);
                    OptionAE2.mousePressed(() => {
                        var AdcE2 = createElement("h2");
                        AdcE2.html("A-It is correct! Looking at your account history ,you will be able to track down unusual activities.")
                        AdcE2.position(500, 500);
                    });
                    OptionBE2.mousePressed(() => {
                        var BdcE2 = createElement("h2");
                        BdcE2.html("Well, looking at your search history won’t help!                        ")
                        BdcE2.position(500, 500);
                    });
                    OptionCE2.mousePressed(() => {
                        var CdcE2 = createElement("h2");
                        CdcE2.html("Logging in again won’t help you either!                        ")
                        CdcE2.position(500, 500);
                    });
                    OptionDE2.mousePressed(() => {
                        var DdcE2 = createElement("h2");
                        DdcE2.html("Des. on answerD")
                        DdcE2.position(500, 500);

                    });
                    var Next1E2 = createButton("What's Next")
                    Next1E2.position(400, 300);
                    Next1E2.mousePressed(() => {
                        OptionAE2.hide();
                        OptionBE2.hide();
                        OptionCE2.hide();
                        OptionDE2.hide();
                        situationE2.hide();
                        Next1E2.hide();

                         var situation2E2 = createElement("h2");
                        situation2E2.html("Situation2");
                        var password2 = createInput()
                        password2.input("Password2");
                        var submit2 = createButton("")

                        
                        // });

                        //CREATE INPUT BOX FOR THIS EPISODE.
                    
                        
                        
            });
            // Episode3
            var beginE3 = createButton("Go!")
            beginE3.mousePressed(()=>{
                beginE3.hide();
                situation2E2.hide();
                password2.hide();
                var intro3 = createElement("h2");
                intro3.html("Season1:Episode3:Twitter and FB Hacked!");
                intro3.position(500, 400);
                var description3 = createElement("h3");
                description3.html("description about Episode3");
                description3.position(500, 430);
                var beginbutton3 = createButton("Begin>");

                beginbutton3.mousePressed(() => {
                    intro3.hide();
                    description3.hide();
                    beginbutton3.hide();
                    var situationE3 = createElement("h2");
                    situationE3.html("Situation");
                    var OptionAE3 = createButton("Option A");
                    OptionAE3.position(100, 500);
                    var OptionBE3 = createButton("Option B");
                    OptionBE3.position(100, 600);
                    var OptionCE3 = createButton("Option C");
                    OptionCE3.position(300, 500);
                    var OptionDE3 = createButton("Option D");
                    OptionDE3.position(300, 600);
                    OptionAE3.mousePressed(() => {
                        var AdcE3 = createElement("h2");
                        AdcE3.html("Des. on answerA")
                        AdcE3.position(500, 500);
                    });
                    OptionBE3.mousePressed(() => {
                        var BdcE3 = createElement("h2");
                        BdcE3.html("Des. on answerB")
                        BdcE3.position(500, 500);
                    });
                    OptionCE3.mousePressed(() => {
                        var CdcE3 = createElement("h2");
                        CdcE3.html("Des. on answerC")
                        CdcE3.position(500, 500);
                    });
                    OptionDE3.mousePressed(() => {
                        var DdcE3 = createElement("h2");
                        DdcE3.html("Des. on answerD")
                        DdcE3.position(500, 500);

                    });
                    var Next1E3 = createButton("What's Next")
                    Next1E3.position(400, 300);
                    Next1E3.mousePressed(() => {
                        OptionAE3.hide();
                        OptionBE3.hide();
                        OptionCE3.hide();
                        OptionDE3.hide();
                        situationE3.hide();
                        Next1E3.hide();

            })
            var beginE4 = createButton("Go!")
            beginE4.mousePressed(()=>{
                beginE4.hide();
                var intro4 = createElement("h2");
                intro4.html("Season1:Episode4:Online Shopping account hacked!");
                intro4.position(500, 400);
                var description4 = createElement("h3");
                description4.html("description about Episode3");
                description4.position(500, 430);
                var beginbutton4 = createButton("Begin>");

                beginbutton4.mousePressed(() => {
                    intro4.hide();
                    description4.hide();
                    beginbutton4.hide();
                    var situationE4 = createElement("h2");
                    situationE4.html("Situation");
                    var OptionAE4 = createButton("Option A");
                    OptionAE4.position(100, 500);
                    var OptionBE4 = createButton("Option B");
                    OptionBE4.position(100, 600);
                    var OptionCE4 = createButton("Option C");
                    OptionCE4.position(300, 500);
                    var OptionDE4 = createButton("Option D");
                    OptionDE4.position(300, 600);
                    OptionAE4.mousePressed(() => {
                        var AdcE4 = createElement("h2");
                        AdcE4.html("Des. on answerA")
                        AdcE4.position(500, 500);
                    });
                    OptionBE4.mousePressed(() => {
                        var BdcE4 = createElement("h2");
                        BdcE4.html("Des. on answerB")
                        BdcE4.position(500, 500);
                    });
                    OptionCE4.mousePressed(() => {
                        var CdcE4 = createElement("h2");
                        CdcE4.html("Des. on answerC")
                        CdcE4.position(500, 500);
                    });
                    OptionDE4.mousePressed(() => {
                        var DdcE4 = createElement("h2");
                        DdcE4.html("Des. on answerD")
                        DdcE4.position(500, 500);

                    });
                    var Next1E4 = createButton("What's Next")
                    Next1E4.position(400, 300);
                    Next1E4.mousePressed(() => {
                        OptionAE4.hide();
                        OptionBE4.hide();
                        OptionCE4.hide();
                        OptionDE4.hide();
                        situationE4.hide();
                        Next1E4.hide();

            })
            // failed
            var failed = createButton("Oops! Your digital life is ruined!")
        //   boxes 4
        // success
        var success = createButton("Congratulations! Your digital life is safe and secured!")
        });


    }
        )}
    
        )}
            )}
        )}
            )}
)}
            )}
        )}}