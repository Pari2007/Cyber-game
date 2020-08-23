class Form2 {
    constructor() {
    }

    display() {
        //1st screen


        
        this.button2.mousePressed(() => {
            this.button2.hide();

            var insightsS2 = createElement("h2");
            insightsS2.html("Insights...S2");
            insightsS2.position(450, 300);
            var proceedbuttonS2 = createButton("Proceed>");
            proceedbuttonS2.position(500, 400);
            proceedbuttonS2.mousePressed(() => {
                insightsS2.hide();
                proceedbuttonS2.hide();
                var introS2 = createElement("h2");
                introS2.html("Season2:Episode1:Gmail Hacked!");
                introS2.position(500, 400);
                var descriptionS2 = createElement("h3");
                descriptionS2.html("description about Episode1");
                descriptionS2.position(500, 430);
                var beginbuttonS2 = createButton("Begin>");

    //             beginbuttonS2.mousePressed(() => {
    //                 introS2.hide();
    //                 descriptionS2.hide();
    //                 beginbuttonS2.hide();
    //                 var situationS2 = createElement("h2");
    //                 situationS2.html("Situation");
    //                 var OptionA = createButton("Option A");
    //                 OptionA.position(100, 500);
    //                 var OptionB = createButton("Option B");
    //                 OptionB.position(100, 600);
    //                 var OptionC = createButton("Option C");
    //                 OptionC.position(300, 500);
    //                 var OptionD = createButton("Option D");
    //                 OptionD.position(300, 600);
    //                 OptionA.mousePressed(() => {
    //                     var Adc = createElement("h2");
    //                     Adc.html("Des. on answerA")
    //                     Adc.position(500, 500);
    //                 });
    //                 OptionB.mousePressed(() => {
    //                     var Bdc = createElement("h2");
    //                     Bdc.html("Des. on answerB")
    //                     Bdc.position(500, 500);
    //                 });
    //                 OptionC.mousePressed(() => {
    //                     var Cdc = createElement("h2");
    //                     Cdc.html("Des. on answerC")
    //                     Cdc.position(500, 500);
    //                 });
    //                 OptionD.mousePressed(() => {
    //                     var Ddc = createElement("h2");
    //                     Ddc.html("Des. on answerD")
    //                     Ddc.position(500, 500);

    //                 });
    //                 var Next1 = createButton("What's Next")
    //                 Next1.position(400, 300);
    //                 Next1.mousePressed(() => {
    //                     OptionA.hide();
    //                     OptionB.hide();
    //                     OptionC.hide();
    //                     OptionD.hide();
    //                     situation.hide();
    //                     Next1.hide();

    //                     var situation2 = createElement("h2");
    //                     situation2.html("Situation2");

    //                     var OptionA2 = createButton("Option A");
    //                     OptionA2.position(100, 500);
    //                     var OptionB2 = createButton("Option B");
    //                     OptionB2.position(100, 600);
    //                     var OptionC2 = createButton("Option C");
    //                     OptionC2.position(300, 500);
    //                     var OptionD2 = createButton("Option D");
    //                     OptionD2.position(300, 600);
    //                     OptionA2.mousePressed(() => {
    //                         var Adc2 = createElement("h2");
    //                         Adc2.html("Des. on answerA2")
    //                         Adc2.position(500, 500);
    //                     });
    //                     OptionB2.mousePressed(() => {
    //                         var Bdc2 = createElement("h2");
    //                         Bdc2.html("Des. on answerB2")
    //                         Bdc2.position(500, 500);
    //                     });
    //                     OptionC2.mousePressed(() => {
    //                         var Cdc2 = createElement("h2");
    //                         Cdc2.html("Des. on answerC2")
    //                         Cdc2.position(500, 500);
    //                     });
    //                     OptionD2.mousePressed(() => {
    //                         var Ddc2 = createElement("h2");
    //                         Ddc2.html("Des. on answerD2")
    //                         Ddc2.position(500, 500);

    //                     });
    //                     var Next2 = createButton("Next>")
    //                 Next2.position(400, 300);
    //                 Next2.mousePressed(() => {
    //                     OptionA2.hide();
    //                     OptionB2.hide();
    //                     OptionC2.hide();
    //                     OptionD2.hide();
    //                     situation2.hide();  
    //                     Next2.hide();
    //                     var situation3 = createElement("h2");
    //                     situation3.html("Situation3");

    //                     var OptionA3 = createButton("Option A");
    //                     OptionA3.position(100, 500);
    //                     var OptionB3 = createButton("Option B");
    //                     OptionB3.position(100, 600);
    //                     var OptionC3 = createButton("Option C");
    //                     OptionC3.position(300, 500);
    //                     var OptionD3 = createButton("Option D");
    //                     OptionD3.position(300, 600);
    //                     OptionA3.mousePressed(() => {
    //                         var Adc3 = createElement("h2");
    //                         Adc3.html("Des. on answerA2")
    //                         Adc3.position(500, 500);
    //                     });
    //                     OptionB3.mousePressed(() => {
    //                         var Bdc3 = createElement("h2");
    //                         Bdc3.html("Des. on answerB2")
    //                         Bdc3.position(500, 500);
    //                     });
    //                     OptionC3.mousePressed(() => {
    //                         var Cdc3 = createElement("h2");
    //                         Cdc3.html("Des. on answerC2")
    //                         Cdc3.position(500, 500);
    //                     });
    //                     OptionD3.mousePressed(() => {
    //                         var Ddc3 = createElement("h2");
    //                         Ddc3.html("Des. on answerD2")
    //                         Ddc3.position(500, 500);

    //                     });

    //                     var beginE2 = createButton("Go!");
    //                     beginE2.mousePressed(()=>{
    //                         beginE2.hide();
    //                         situation3.hide()
    //                         OptionA3.hide()
    //                         OptionB3.hide()
    //                         OptionC3.hide()
    //                         OptionD3.hide()
    //                 });
    //             //     var Next3 = createButton("Next>")
    //             //     Next3.position(400, 300);
    //             //     Next3.mousePressed(() => {
    //             //         OptionA3.hide();
    //             //         OptionB3.hide();
    //             //         OptionC3.hide();
    //             //         OptionD3.hide();
    //             //         situation3.hide();  
    //             //         Next3.hide();
    //             //         var situation4 = createElement("h2");
    //             //         situation4.html("Situation3");
    //             //         var password1 = createInput("h2")
    //             //         password1.input("Password")

                         

    //              });
                

    //              })
    //             // Episode 2
    //             var intro2 = createElement("h2");
    //             intro2.html("Season2:Episode2:Twitter and FB Hacked!");
    //             intro2.position(500, 400);
    //             var description2 = createElement("h3");
    //             description2.html("description about Episode2");
    //             description2.position(500, 430);
    //             var beginbutton2 = createButton("Begin>");

    //             beginbutton2.mousePressed(() => {
    //                 intro2.hide();
    //                 description2.hide();
    //                 beginbutton2.hide();
    //                 var situationE2 = createElement("h2");
    //                 situationE2.html("Situation");
    //                 var OptionAE2 = createButton("Option A");
    //                 OptionAE2.position(100, 500);
    //                 var OptionBE2 = createButton("Option B");
    //                 OptionBE2.position(100, 600);
    //                 var OptionCE2 = createButton("Option C");
    //                 OptionCE2.position(300, 500);
    //                 var OptionDE2 = createButton("Option D");
    //                 OptionDE2.position(300, 600);
    //                 OptionAE2.mousePressed(() => {
    //                     var AdcE2 = createElement("h2");
    //                     AdcE2.html("Des. on answerA")
    //                     AdcE2.position(500, 500);
    //                 });
    //                 OptionBE2.mousePressed(() => {
    //                     var BdcE2 = createElement("h2");
    //                     BdcE2.html("Des. on answerB")
    //                     BdcE2.position(500, 500);
    //                 });
    //                 OptionCE2.mousePressed(() => {
    //                     var CdcE2 = createElement("h2");
    //                     CdcE2.html("Des. on answerC")
    //                     CdcE2.position(500, 500);
    //                 });
    //                 OptionDE2.mousePressed(() => {
    //                     var DdcE2 = createElement("h2");
    //                     DdcE2.html("Des. on answerD")
    //                     DdcE2.position(500, 500);

    //                 });
    //                 var Next1E2 = createButton("What's Next")
    //                 Next1E2.position(400, 300);
    //                 Next1E2.mousePressed(() => {
    //                     OptionAE2.hide();
    //                     OptionBE2.hide();
    //                     OptionCE2.hide();
    //                     OptionDE2.hide();
    //                     situationE2.hide();
    //                     Next1E2.hide();

    //                     // var situation2E2 = createElement("h2");
    //                     // situation2E2.html("Situation2");

    //                     // var OptionA2E2 = createButton("Option A");
    //                     // OptionA2E2.position(100, 500);
    //                     // var OptionB2E2 = createButton("Option B");
    //                     // OptionB2E2.position(100, 600);
    //                     // var OptionC2E2 = createButton("Option C");
    //                     // OptionC2E2.position(300, 500);
    //                     // var OptionD2E2 = createButton("Option D");
    //                     // OptionD2E2.position(300, 600);
    //                     // OptionA2E2.mousePressed(() => {
    //                     //     var Adc2E2 = createElement("h2");
    //                     //     Adc2E2.html("Des. on answerA2")
    //                     //     Adc2E2.position(500, 500);
    //                     // });
    //                     // OptionB2E2.mousePressed(() => {
    //                     //     var Bdc2E2 = createElement("h2");
    //                     //     Bdc2E2.html("Des. on answerB2")
    //                     //     Bdc2E2.position(500, 500);
    //                     // });
    //                     // OptionC2E2.mousePressed(() => {
    //                     //     var Cdc2E2 = createElement("h2");
    //                     //     Cdc2E2.html("Des. on answerC2")
    //                     //     Cdc2E2.position(500, 500);
    //                     // });
    //                     // OptionD2E2.mousePressed(() => {
    //                     //     var Ddc2E2 = createElement("h2");
    //                     //     Ddc2E2.html("Des. on answerD2")
    //                     //     Ddc2E2.position(500, 500);

    //                     // });

    //                     //CREATE INPUT BOX FOR THIS EPISODE.
                    
                        
                        
    //         });
    //         // Episode3
    //         var beginE3 = createButton("Go!")
    //         beginE3.mousePressed(()=>{
    //             beginE3.hide();
    //             var intro3 = createElement("h2");
    //             intro3.html("Season1:Episode3:Twitter and FB Hacked!");
    //             intro3.position(500, 400);
    //             var description3 = createElement("h3");
    //             description3.html("description about Episode3");
    //             description3.position(500, 430);
    //             var beginbutton3 = createButton("Begin>");

    //             beginbutton3.mousePressed(() => {
    //                 intro3.hide();
    //                 description3.hide();
    //                 beginbutton3.hide();
    //                 var situationE3 = createElement("h2");
    //                 situationE3.html("Situation");
    //                 var OptionAE3 = createButton("Option A");
    //                 OptionAE3.position(100, 500);
    //                 var OptionBE3 = createButton("Option B");
    //                 OptionBE3.position(100, 600);
    //                 var OptionCE3 = createButton("Option C");
    //                 OptionCE3.position(300, 500);
    //                 var OptionDE3 = createButton("Option D");
    //                 OptionDE3.position(300, 600);
    //                 OptionAE3.mousePressed(() => {
    //                     var AdcE3 = createElement("h2");
    //                     AdcE3.html("Des. on answerA")
    //                     AdcE3.position(500, 500);
    //                 });
    //                 OptionBE3.mousePressed(() => {
    //                     var BdcE3 = createElement("h2");
    //                     BdcE3.html("Des. on answerB")
    //                     BdcE3.position(500, 500);
    //                 });
    //                 OptionCE3.mousePressed(() => {
    //                     var CdcE3 = createElement("h2");
    //                     CdcE3.html("Des. on answerC")
    //                     CdcE3.position(500, 500);
    //                 });
    //                 OptionDE3.mousePressed(() => {
    //                     var DdcE3 = createElement("h2");
    //                     DdcE3.html("Des. on answerD")
    //                     DdcE3.position(500, 500);

    //                 });
    //                 var Next1E3 = createButton("What's Next")
    //                 Next1E3.position(400, 300);
    //                 Next1E3.mousePressed(() => {
    //                     OptionAE3.hide();
    //                     OptionBE3.hide();
    //                     OptionCE3.hide();
    //                     OptionDE3.hide();
    //                     situationE3.hide();
    //                     Next1E3.hide();

    //         })
    //         var beginE4 = createButton("Go!")
    //         beginE4.mousePressed(()=>{
    //             beginE4.hide();
    //             var intro4 = createElement("h2");
    //             intro4.html("Season1:Episode4:Online Shopping account hacked!");
    //             intro4.position(500, 400);
    //             var description4 = createElement("h3");
    //             description4.html("description about Episode3");
    //             description4.position(500, 430);
    //             var beginbutton4 = createButton("Begin>");

    //             beginbutton4.mousePressed(() => {
    //                 intro4.hide();
    //                 description4.hide();
    //                 beginbutton4.hide();
    //                 var situationE4 = createElement("h2");
    //                 situationE4.html("Situation");
    //                 var OptionAE4 = createButton("Option A");
    //                 OptionAE4.position(100, 500);
    //                 var OptionBE4 = createButton("Option B");
    //                 OptionBE4.position(100, 600);
    //                 var OptionCE4 = createButton("Option C");
    //                 OptionCE4.position(300, 500);
    //                 var OptionDE4 = createButton("Option D");
    //                 OptionDE4.position(300, 600);
    //                 OptionAE4.mousePressed(() => {
    //                     var AdcE4 = createElement("h2");
    //                     AdcE4.html("Des. on answerA")
    //                     AdcE4.position(500, 500);
    //                 });
    //                 OptionBE4.mousePressed(() => {
    //                     var BdcE4 = createElement("h2");
    //                     BdcE4.html("Des. on answerB")
    //                     BdcE4.position(500, 500);
    //                 });
    //                 OptionCE4.mousePressed(() => {
    //                     var CdcE4 = createElement("h2");
    //                     CdcE4.html("Des. on answerC")
    //                     CdcE4.position(500, 500);
    //                 });
    //                 OptionDE4.mousePressed(() => {
    //                     var DdcE4 = createElement("h2");
    //                     DdcE4.html("Des. on answerD")
    //                     DdcE4.position(500, 500);

    //                 });
    //                 var Next1E4 = createButton("What's Next")
    //                 Next1E4.position(400, 300);
    //                 Next1E4.mousePressed(() => {
    //                     OptionAE4.hide();
    //                     OptionBE4.hide();
    //                     OptionCE4.hide();
    //                     OptionDE4.hide();
    //                     situationE4.hide();
    //                     Next1E4.hide();

    //         })
    //         // failed
    //         var failed = createButton("Oops! Your digital life is ruined!")
    //     //   boxes 4
    //     // success
    //     var success = createButton("Congratulations! Your digital life is safe and secured!")
    //     });


    // }
    //     )}
    
    //     )}
    //         )}
    //     )}
    //         )}
 })
            }
        )}
    }