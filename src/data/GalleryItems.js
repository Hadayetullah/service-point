const GalleryItems = [
  {
    id: 1,
    title: "Home Needs",
    services: [
      {
        id: 1,
        item: "House Shifting Service",
        title: "House Shifting",
        componentName: "HouseShifting",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "What services do you offer?",
            text: [
              "We offer a full range of packing, moving and storage services. This includes local moves and full packaging services. If you are packing by yourself we can provide boxes and any other packing supplies for you to purchase.",
            ],
          },
          {
            id: 2,
            title: "When should I call a moving company?",
            text: [
              "We ask that you not schedule the move without having a closing date or a confirmed date and time. We recommend that you contact BD Service Point at 01736186865 as soon as you can so that we can accommodate your specific date and time.",
            ],
          },
          {
            id: 3,
            title: "Do I need an estimate?",
            text: [
              "Yes. For small moves, you can get an estimate over the phone from one of our relocation consultants or service provider. For larger moves, upon request, BD Service Point service provider representative will give you a written “Estimated cost of services” after a visual survey of the goods to be moved. There is no charge for the estimate.",
            ],
          },
          {
            id: 4,
            title: "When is the best time to move?",
            text: [
              "There is no “best time” to move because everyone is different in what they need, however, the summer season is always the busiest time of the year.",
            ],
          },
          {
            id: 5,
            title: "How long does it take to move?",
            text: [
              "This depends on many factors, including the time of year, weather conditions, size of your shipment, size of the elevator, the time required to load and unload, and the direction and distances your shipment is travelling.",
            ],
          },
          {
            id: 6,
            title: "How and when will I pay?",
            text: [
              "We accept most forms of payment. This includes, but is not limited too, certified money orders, cash, and most major credit cards, online payment and EMI etc. For service providers, we must take payment at the end of the move.",
            ],
          },
          {
            id: 7,
            title: "Can I pack clothes in my dresser drawers?",
            text: [
              "In general, we recommend that you empty items from all bureaus, desks, dressers, chests, armoires, etc. Lightweight clothing-sweaters, shirts, blouses, lingerie-may be left in light dressers. Do not fill drawers with heavy items, which can damage the piece of furniture during transit.",
            ],
          },
          {
            id: 8,
            title: "Am I protected against loss or damage?",
            text: [
              "Yes. There is a basic valuation that is included with all moves, as well as a few options for increasing this.",
            ],
          },
          {
            id: 9,
            title: "How should I pack my belongings if I am doing it myself?",
            text: [
              "If you choose to do some or all of your own packing in preparation for your relocation, it’s especially important that you be familiar with the techniques that will best protect your possessions. Boxes should be packed tightly with padding after items are inside to prevent shifting during transportation. You can use anything like newspapers, blankets or linens to pack these boxes tight. Keep in mind that a customer packed cartons will not be insured during the move.",
            ],
          },
          {
            id: 10,
            title:
              "Is there an additional charge for elevators or long hallways?",
            text: [
              "No. BD Service Point service provider charges the same rates whether you live in a house on the top floor of a high rise.",
            ],
          },
          {
            id: 11,
            title: "Should I move jewelry and other valuables myself?",
            text: [
              "While service providers can move valuables such as money, jewellery or other items of extraordinary value, we recommend that you carry irreplaceable and expensive articles with you.",
            ],
          },
          {
            id: 12,
            title: "In case of rain, is this going to be a problem?",
            text: [
              "Maybe No. All of your furniture is going to be wrapped in padding or shrink-wrap so you do not need to worry about them getting wet. If you take the packaging service or not.",
            ],
          },
          {
            id: 13,
            title: "Can I ride along on the truck?",
            text: [
              "We cannot allow people other than movers to ride in the truck because for liability purposes.",
            ],
          },
          {
            id: 14,
            title:
              "If unfortunately one of my items is damaged or lost, what should I do?",
            text: [
              "It is very rare that we incur any type of damage during the move. However, if this does occur, please give us a call 16516 urgently when SP present at the location and we will address the issue.",
            ],
          },
          {
            id: 15,
            title: "Is the any service warranty ?",
            text: [
              "Yes, You will also get 7 days service warranty as company policy. This warranty only service quality issue, (ex- AC not working after install.)  Shifting Damage & Lost issue not acceptable after service day.",
            ],
          },
          {
            id: 16,
            title: "What is Fixed Price Meaning?",
            text: [
              "It means Mover cost, Transport cost, carton cost, Electrician cost, carpenter cost etc. fixed by BD Service Point. ",
            ],
          },
          {
            id: 17,
            title: "What is the Fixed Mover cost?",
            text: [
              "One Professional mover 8 hours service time within Dhaka city - 1000tk cost, (Extra 100tk per hour). Outside city price will vary as per requirement.",
            ],
          },
          {
            id: 18,
            title: "What is the Fixed Transport cost?",
            text: [
              "Within city one trip service ->",
              "1 ton / 7 feet pickup- 1700tk",
              "1.5 ton / 9 feet pickup- 2500tk",
              "2 ton / 10 feet pickup-3200tk ",
              "3 ton / 12 feet cover van- 3500tk",
              "5 ton / 16 feet cover van- 5500",
              "(10/12) ton /20 Feet Truck-7000",
              "Outside city service price will vary as per requirement.",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 19,
            title: "What is Covered Van Fixed cost?",
            text: [
              "Within city one trip service ",
              "1 ton / 7 feet- 3000tk",
              "2 ton / 10 feet- 4500tk",
              "3 ton/ 12 feet- 4500tk",
              "4 ton/ 14 feet- 5000tk",
              "5 ton/ 16 feet- 6000tk",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 20,
            title: "What is Packaging cost?",
            text: [
              "Medium Size carton",
              " 150tk/per peace Carton tape",
              " 130tk/ per peace Babble wrap, paper, rope, jute beg, etc.",
              "the price will be very as per requirement.",
            ],
          },
          {
            id: 21,
            title: "What is the AC Shifting cost?",
            text: [
              "1 Ton to 3-Ton AC shifting 2500tk / Peace (without materials & transport).",
            ],
          },
          {
            id: 22,
            title: "What is Carpenter price?",
            text: [
              "Carpenter for furniture dismantle & install 2000tk /Almeira",
            ],
          },
        ],
      },
      {
        id: 2,
        item: "Commercial Shifting Service",
        title: "Commercial Shifting",
        componentName: "CommercialShifting",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "What services do you offer?",
            text: [
              "We offer a full range of packing, moving and storage services. This includes local moves and full packing services. If you are packing yourself we can provide boxes and any other packing supplies for you to purchase.",
            ],
          },
          {
            id: 2,
            title: "When should I call a moving company?",
            text: [
              "We ask that you not schedule the move without having a closing date or a confirmed date and time. We recommend that you contact BD Service Point as soon as you can so that we can accommodate your specific date and time.",
            ],
          },
          {
            id: 3,
            title: "Do I need an estimate?",
            text: [
              "Yes. For small moves, you can get an estimate over the phone from one of our relocation consultants or service provider. For larger moves, upon request, BD Service Point service provider representative will give you a written “Estimated Cost of Services” after a visual survey of the goods to be moved. There is no charge for the estimate.",
            ],
          },
          {
            id: 4,
            title: "What exactly is ‘travel time’?",
            text: [
              "In local move, travel time is the time it takes us to get to and from the job site(s). It is charged as a flat rate based on the location of the job site(s).",
            ],
          },
          {
            id: 5,
            title: "When is the best time to move?",
            text: [
              "There is no “best time” to move because everyone is different in what they need, however, the summer season is always the busiest time of the year.",
            ],
          },
          {
            id: 6,
            title: "How long does it take to move?",
            text: [
              "This depends on many factors, including the time of year, weather conditions, size of your shipment, size of the elevator, the time required to load and unload, and the direction and distances your shipment is travelling.",
            ],
          },
          {
            id: 7,
            title: "How and when will I pay?",
            text: [
              "We accept most forms of payment. This includes, but is not limited too, certified money orders, cash, and most major credit cards, online payment, EMI etc. For service providers we must take payment at the end of the move.",
            ],
          },
          {
            id: 8,
            title: "Can I pack clothes in my dresser drawers?",
            text: [
              "In general, we recommend that you empty items from all bureaus, desks, dressers, chests, armoires, etc. Lightweight clothing-sweaters, shirts, blouses, lingerie-may be left in light dressers. Do not fill drawers with heavy items, which can damage the piece of furniture during transit.",
            ],
          },
          {
            id: 9,
            title: "Am I protected against loss or damage?",
            text: [
              "Yes. There is a basic valuation that is included with all moves, as well as a few options for increasing this.",
            ],
          },
          {
            id: 10,
            title: "How should I pack my belongings if I am doing it myself?",
            text: [
              "If you choose to do some or all of your own packing in preparation for your relocation, it’s especially important that you be familiar with the techniques that will best protect your possessions. Boxes should be packed tightly with padding after items are inside to prevent shifting during transportation. You can use anything like newspaper, blankets or linens to pack these boxes tight. Keep in mind that a customer packed cartons will not be insured during the move.",
            ],
          },
          {
            id: 11,
            title:
              "Is my building going to want to know anything about my move?",
            text: [
              "Most buildings with elevators are going to require that you get authorization for a specific time that you can use them for your move. You should look into this immediately to make sure you can get the time you want. Additionally, most building managers are going to want to see a “Certificate of Liability”. At your request we can have this sent to them.",
            ],
          },
          {
            id: 12,
            title:
              "Is there an additional charge for elevators or long hallways?",
            text: [
              "No. BD Service Point service provider charges the same rates whether you live in a house on the top floor of a high rise.",
            ],
          },
          {
            id: 13,
            title: "Should I move jewelry and other valuables myself?",
            text: [
              "While service provider can move valuables such as money, jewelry, or other items of extraordinary value, we recommend that you carry irreplaceable and expensive articles with you.",
            ],
          },
          {
            id: 14,
            title:
              "It is raining/snowing today, is this going to be a problem?",
            text: [
              "Maybe No. All of your furniture is going to be wrapped in padding or shrink-wrap so you do not need to worry about them getting wet. If you take the packaging service or not.",
            ],
          },
          {
            id: 15,
            title: "Can I ride along on the truck?",
            text: [
              "We cannot allow people other than movers to ride in the truck because for liability purposes.",
            ],
          },
          {
            id: 16,
            title: "Am I supposed to tip the movers?",
            text: [
              "Tipping is not required, but many people do. You should decide based on the quality of the move that you receive. Those that do tip tend to give either a small percentage of the entire move, or a small dollar amount per mover per hour. In the end, you should only tip an amount you are comfortable with.",
            ],
          },
          {
            id: 17,
            title:
              "Unfortunately one of my items was damaged or lost, what should I do?",
            text: [
              "It is very rare that we incur any type of damage during the move. However if this does occur, please give us a call and we will address the issue.",
            ],
          },
        ],
      },
      {
        id: 3,
        item: "Cleaning & Pest Control Service",
        title: "Cleaning & Pest Control",
        componentName: "CleaningPestControl",
        src: "asset/service-icon/pesting.png",
        data: [
          {
            id: 1,
            title:
              "Does the price include cleaning material and equipment charge?",
            text: [
              "Yes. All kinds of material cost for cleaning services is included in the price declared.",
            ],
          },
          {
            id: 2,
            title:
              "What if something goes wrong after availing a service from BD Service Point?",
            text: [
              "       If anything goes wrong after availing a particular through BD Service Point. A tri-party investigation will be launched (which will involve Sheba, service partner and the customer).After completion of a transparent investigation. Detection and rectification of the issue will be made. ",
            ],
          },
          {
            id: 3,
            title:
              "Is the price Subjected to Fluctuation depending on work scope?",
            text: [
              "The prices declared are estimated and may vary depending on the complexity of work.",
            ],
          },
        ],
      },
      {
        id: 4,
        item: "Home Deep Cleaning Service",
        title: "Home Deep Cleaning",
        componentName: "HomeDeepClean",
        src: "asset/service-icon/cleaning.png",
        data: [
          {
            id: 1,
            title:
              "Does the price include cleaning material and equipment charge?",
            text: [
              "Yes. All kinds of material cost for cleaning services is included in the price declared.",
            ],
          },
          {
            id: 2,
            title:
              "What if something goes wrong after availing a service from BD Service Point?",
            text: [
              "       If anything goes wrong after availing a particular through BD Service Point. A tri-party investigation will be launched (which will involve Sheba, service partner and the customer).After completion of a transparent investigation. Detection and rectification of the issue will be made. ",
            ],
          },
          {
            id: 3,
            title:
              "Is the price Subjected to Fluctuation depending on work scope?",
            text: [
              "The prices declared are estimated and may vary depending on the complexity of work.",
            ],
          },
        ],
      },
      {
        id: 5,
        item: "Sofa & Carpet Cleaning Service",
        title: "Sofa & Carpet Cleaning",
        componentName: "SofaCarpetClean",
        src: "asset/service-icon/carpentry.png",
        data: [
          {
            id: 1,
            title:
              "Does the price include cleaning material and equipment charge?",
            text: [
              "Yes. All kinds of material cost for cleaning services is included in the price declared.",
            ],
          },
          {
            id: 2,
            title:
              "What if something goes wrong after availing a service from BD Service Point?",
            text: [
              "       If anything goes wrong after availing a particular through BD Service Point. A tri-party investigation will be launched (which will involve Sheba, service partner and the customer).After completion of a transparent investigation. Detection and rectification of the issue will be made. ",
            ],
          },
          {
            id: 3,
            title:
              "Is the price Subjected to Fluctuation depending on work scope?",
            text: [
              "The prices declared are estimated and may vary depending on the complexity of work.",
            ],
          },
        ],
      },
      {
        id: 6,
        item: "Tank & Pipe Cleaning Service",
        title: "Tank & Pipe Cleaning",
        componentName: "TankPipeClean",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Does my tank need to be empty for you to clean it?",
            text: [
              "Yes. Water tank needs to be kept empty prior to the service delivery. ",
            ],
          },
          {
            id: 2,
            title: "How long does it take to clean?",
            text: [
              "This depends on the size of water tanks, work scope and complexity. Our service provider will try to complete cleaning your tank within 3-6 hours.",
            ],
          },
          {
            id: 3,
            title: "Does my tank need to be empty for you to clean it?",
            text: [
              " Yes. Water tank needs to be kept empty prior to the service delivery.",
            ],
          },
          {
            id: 4,
            title:
              "How long do I have to wait after you clean my tank in order to use it again?",
            text: [
              "  You can start using your tank right after we are done with cleaning.",
            ],
          },
          {
            id: 5,
            title: "How much does it cost to clean a tank?",
            text: ["     It depends on the size and types of the tank."],
          },
          {
            id: 6,
            title: "Does the price fixed?",
            text: [
              "  The price is not fixed it will be variable on the size and types of the tank",
            ],
          },
          {
            id: 7,
            title: "Do I need to pay any advance payment?",
            text: ["   There no need to pay any advance payment"],
          },
          {
            id: 8,
            title: "Is the price applicable for any size of underground tank?",
            text: [
              "   No. For regular overhead water tank used in six storied buildings, this package covers all cost. However, upon inspection, if the tank size is larger than regular size package price may vary within tolerable range.",
            ],
          },
        ],
      },
      {
        id: 7,
        item: "Bathroom & Kitchen Cleaning Service",
        title: "Bathroom & Kitchen Cleaning",
        componentName: "BathroomKitchenClean",
        src: "asset/service-icon/kitchen-app.png",
        data: [
          {
            id: 1,
            title:
              "Does the price include cleaning material and equipment charge?",
            text: [
              "Yes. All kinds of material cost for cleaning services is included in the price declared.",
            ],
          },
          {
            id: 2,
            title:
              "What if something goes wrong after availing a service from BD Service Point?",
            text: [
              "       If anything goes wrong after availing a particular through BD Service Point. A tri-party investigation will be launched (which will involve Sheba, service partner and the customer).After completion of a transparent investigation. Detection and rectification of the issue will be made. ",
            ],
          },
          {
            id: 3,
            title:
              "Is the price Subjected to Fluctuation depending on work scope?",
            text: [
              "The prices declared are estimated and may vary depending on the complexity of work.",
            ],
          },
        ],
      },
      {
        id: 8,
        item: "Virus Disinfecting Service",
        title: "Virus Disinfecting",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 9,
        item: "Premium Cleaning Service",
        title: "Premium Cleaning",
        componentName: "PremiumClean",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title:
              "Does the price include cleaning material and equipment charge?",
            text: [
              "Yes. All kinds of material cost for cleaning services is included in the price declared.",
            ],
          },
          {
            id: 2,
            title:
              "What if something goes wrong after availing a service from BD Service Point?",
            text: [
              "       If anything goes wrong after availing a particular through BD Service Point. A tri-party investigation will be launched (which will involve Sheba, service partner and the customer).After completion of a transparent investigation. Detection and rectification of the issue will be made. ",
            ],
          },
          {
            id: 3,
            title:
              "Is the price Subjected to Fluctuation depending on work scope?",
            text: [
              "The prices declared are estimated and may vary depending on the complexity of work.",
            ],
          },
        ],
      },
      {
        id: 10,
        item: "Painting & Renovation Service",
        title: "Painting & Renovation",
        componentName: "PaintingRenovation",
        src: "asset/service-icon/painting.png",
        data: [
          {
            id: 1,
            title: "How is the cost calculated for painting walls?",
            text: [
              "The cost is calculated based on the amount of paint used for painting walls.To help you understand we’ve added an example: A room that is 10 x 15 feet with an 9-foot ceiling. The room has two doors and two windows. Measure the total distance (perimeter) around the room. (10 ft. + 15 ft.) x 2 = 50 ft. Multiply the perimeter by the ceiling height to get the total wall area: 50 ft. x 9 ft. = 450 sq. ft. Doors are usually 21 square feet (there are two in this example): 21 sq. ft. x 2 = 42 sq. ft. Windows average 15 square feet (there are two in this example): 15 sq. ft. x 2 = 30 sq. ft. Take the total wall area and subtract the area for the doors and windows to get the wall surface to be painted: 450 sq. ft. (wall area) – 42 sq. ft. (doors) – 30 sq. ft. (windows) = 378 sq. ft. of walls that needs to be painted. You can calculate the quantity of ceiling paint needed for the ceiling by multiplying the width of the room by its length: 10 ft. x 15 ft. = 150 sq. ft. So in this example total paint surface is 528 sq. ft.",
            ],
          },
          {
            id: 2,
            title: "What is the coverage area of the Paints?",
            text: [
              " It usually provides a coverage of 120 - 140 square feet per litre for 1 coat and 60 - 70 square feet per litre for 2 coats on a normal masonry surface.",
            ],
          },
          {
            id: 3,
            title: "What is the life time of the color?",
            text: [
              "Color life span is 4 to 5 years. Hence, it depends on the wall condition..",
            ],
          },

          {
            id: 4,
            title: "What is the life time of the color?",
            text: [
              "Color life span is 4 to 5 years. Hence, it depends on the wall condition..",
            ],
          },
          {
            id: 5,
            title: "Do I need to pay for extra labor?",
            text: [
              " For every service we will assign a proper number of laborers to complete it on time. But if you want extra labor in order to complete it early then you have to pay for extra labor.",
            ],
          },
          {
            id: 6,
            title:
              "Do i need to provide visit charge if i don't want the service?",
            text: [
              " Yes. After expert visit your place the consultation fee of 250 tk needs to be paid. With consultation you will get:1. on site inspection and analysis of wall condition 2. suitable color and paint preference 3. costing and measurement 4. other queries which you may face during painting. These service becomes free when you take the painting service with BD Service Point",
            ],
          },
          {
            id: 7,
            title: "What is the purpose of renovation?",
            text: [
              " To remodel & redesign your old property of house, office or any other space by changing the structure, looks, design or repair existing and increase value, beautification, comfort and personal preferences.",
            ],
          },
          {
            id: 8,
            title: "How the service cost calculated?",
            text: [
              " The renovation & repair of existing property services cost depends on material and man hour requires to complete the services. Expert will visit and analysis the requirements and provide quotation based on square feet or Job unit required.",
            ],
          },
        ],
      },
      {
        id: 11,
        item: "Electronics & Gadgets Repair Service",
        title: "Electronics & Gadgets Repair",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 12,
        item: "Plumbing Service",
        title: "Plumbing",
        componentName: "Plumbing",
        src: "asset/service-icon/plumbing.png",
        data: [
          {
            id: 1,
            title: "Does accessories cost included in service charge?",
            text: [
              "No, additional materials and parts cost are excluded from service charge.",
            ],
          },
          {
            id: 2,
            title:
              "Is the price mentioned subjected to fluctuation depending on work scope?",
            text: [
              " The price mentioned here is estimated and may vary depending on work scope, service/product availability.",
            ],
          },
          {
            id: 3,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avial any plumbing and sanitary service after provided technician reach at your doorstep then you only have to pay the visiting charge which is BDT 100.",
            ],
          },
        ],
      },
      {
        id: 13,
        item: "Laundry Service",
        title: "Laundry",
        componentName: null,
        src: "asset/service-icon/laundry.png",
      },
      {
        id: 14,
        item: "Carpentry Service",
        title: "Carpentry",
        componentName: null,
        src: "asset/service-icon/carpentry.png",
      },
      {
        id: 15,
        item: "Movers & Packers Service",
        title: "Movers & Packers",
        componentName: "MoversPackers",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "What services do you offer?",
            text: [
              "We offer a full range of packing, moving and storage services. This includes local moves and full packaging services. If you are packing by yourself we can provide boxes and any other packing supplies for you to purchase.",
            ],
          },
          {
            id: 2,
            title: "When should I call a moving company?",
            text: [
              "We ask that you not schedule the move without having a closing date or a confirmed date and time. We recommend that you contact BD Service Point at 01736186865 as soon as you can so that we can accommodate your specific date and time.",
            ],
          },
          {
            id: 3,
            title: "Do I need an estimate?",
            text: [
              "Yes. For small moves, you can get an estimate over the phone from one of our relocation consultants or service provider. For larger moves, upon request, BD Service Point service provider representative will give you a written “Estimated cost of services” after a visual survey of the goods to be moved. There is no charge for the estimate.",
            ],
          },
          {
            id: 4,
            title: "When is the best time to move?",
            text: [
              "There is no “best time” to move because everyone is different in what they need, however, the summer season is always the busiest time of the year.",
            ],
          },
          {
            id: 5,
            title: "How long does it take to move?",
            text: [
              "This depends on many factors, including the time of year, weather conditions, size of your shipment, size of the elevator, the time required to load and unload, and the direction and distances your shipment is travelling.",
            ],
          },
          {
            id: 6,
            title: "How and when will I pay?",
            text: [
              "We accept most forms of payment. This includes, but is not limited too, certified money orders, cash, and most major credit cards, online payment and EMI etc. For service providers, we must take payment at the end of the move.",
            ],
          },
          {
            id: 7,
            title: "Can I pack clothes in my dresser drawers?",
            text: [
              "In general, we recommend that you empty items from all bureaus, desks, dressers, chests, armoires, etc. Lightweight clothing-sweaters, shirts, blouses, lingerie-may be left in light dressers. Do not fill drawers with heavy items, which can damage the piece of furniture during transit.",
            ],
          },
          {
            id: 8,
            title: "Am I protected against loss or damage?",
            text: [
              "Yes. There is a basic valuation that is included with all moves, as well as a few options for increasing this.",
            ],
          },
          {
            id: 9,
            title: "How should I pack my belongings if I am doing it myself?",
            text: [
              "If you choose to do some or all of your own packing in preparation for your relocation, it’s especially important that you be familiar with the techniques that will best protect your possessions. Boxes should be packed tightly with padding after items are inside to prevent shifting during transportation. You can use anything like newspapers, blankets or linens to pack these boxes tight. Keep in mind that a customer packed cartons will not be insured during the move.",
            ],
          },
          {
            id: 10,
            title:
              "Is there an additional charge for elevators or long hallways?",
            text: [
              "No. BD Service Point service provider charges the same rates whether you live in a house on the top floor of a high rise.",
            ],
          },
          {
            id: 11,
            title: "Should I move jewelry and other valuables myself?",
            text: [
              "While service providers can move valuables such as money, jewellery or other items of extraordinary value, we recommend that you carry irreplaceable and expensive articles with you.",
            ],
          },
          {
            id: 12,
            title: "In case of rain, is this going to be a problem?",
            text: [
              "Maybe No. All of your furniture is going to be wrapped in padding or shrink-wrap so you do not need to worry about them getting wet. If you take the packaging service or not.",
            ],
          },
          {
            id: 13,
            title: "Can I ride along on the truck?",
            text: [
              "We cannot allow people other than movers to ride in the truck because for liability purposes.",
            ],
          },
          {
            id: 14,
            title:
              "If unfortunately one of my items is damaged or lost, what should I do?",
            text: [
              "It is very rare that we incur any type of damage during the move. However, if this does occur, please give us a call 16516 urgently when SP present at the location and we will address the issue.",
            ],
          },
          {
            id: 15,
            title: "Is the any service warranty ?",
            text: [
              "Yes, You will also get 7 days service warranty as company policy. This warranty only service quality issue, (ex- AC not working after install.)  Shifting Damage & Lost issue not acceptable after service day.",
            ],
          },
          {
            id: 16,
            title: "What is Fixed Price Meaning?",
            text: [
              "It means Mover cost, Transport cost, carton cost, Electrician cost, carpenter cost etc. fixed by BD Service Point. ",
            ],
          },
          {
            id: 17,
            title: "What is the Fixed Mover cost?",
            text: [
              "One Professional mover 8 hours service time within Dhaka city - 1000tk cost, (Extra 100tk per hour). Outside city price will vary as per requirement.",
            ],
          },
          {
            id: 18,
            title: "What is the Fixed Transport cost?",
            text: [
              "Within city one trip service ->",
              "1 ton / 7 feet pickup- 1700tk",
              "1.5 ton / 9 feet pickup- 2500tk",
              "2 ton / 10 feet pickup-3200tk ",
              "3 ton / 12 feet cover van- 3500tk",
              "5 ton / 16 feet cover van- 5500",
              "(10/12) ton /20 Feet Truck-7000",
              "Outside city service price will vary as per requirement.",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 19,
            title: "What is Covered Van Fixed cost?",
            text: [
              "Within city one trip service ",
              "1 ton / 7 feet- 3000tk",
              "2 ton / 10 feet- 4500tk",
              "3 ton/ 12 feet- 4500tk",
              "4 ton/ 14 feet- 5000tk",
              "5 ton/ 16 feet- 6000tk",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 20,
            title: "What is Packaging cost?",
            text: [
              "Medium Size carton",
              " 150tk/per peace Carton tape",
              " 130tk/ per peace Babble wrap, paper, rope, jute beg, etc.",
              "the price will be very as per requirement.",
            ],
          },
          {
            id: 21,
            title: "What is the AC Shifting cost?",
            text: [
              "1 Ton to 3-Ton AC shifting 2500tk / Peace (without materials & transport).",
            ],
          },
          {
            id: 22,
            title: "What is Carpenter price?",
            text: [
              "Carpenter for furniture dismantle & install 2000tk /Almeira",
            ],
          },
        ],
      },
      {
        id: 16,
        item: "Shower Filters Service",
        title: "Shower Filters",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 17,
        item: "Water Purifier Setup Service",
        title: "Water Purifier Setup",
        componentName: null,
        src: "asset/service-icon/water-purifier.png",
      },
    ],
  },
  {
    id: 2,
    title: "AC Repair",
    services: [
      {
        id: 1,
        item: "AC Installation Service",
        title: "Installation",
        componentName: "AcInstallation",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 2,
        item: "AC Uninstallation Service",
        title: "Uninstallation",
        componentName: "AcUninstallation",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 3,
        item: "AC Gas Refill Service",
        title: "Gas Refill",
        componentName: "AcGasRefill",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 4,
        item: "AC Leak Repair Service",
        title: "Leak Repair",
        componentName: "AcLeakRepair",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 5,
        item: "AC Circuit Reapir Service",
        title: "Circuit Reapir",
        componentName: "AcCircuitReapir",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 6,
        item: "AC Capacitor Repalcement Service",
        title: "Capacitor Repalcement",
        componentName: "AcCapacitorRepalcement",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 7,
        item: "AC Compresser Change Service",
        title: "Compresser Change",
        componentName: "AcCompresserChange",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 8,
        item: "AC Basic Service",
        title: "Basic Service",
        componentName: "AcBasicService",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 9,
        item: "AC Master Service",
        title: "Master Service",
        componentName: "AcMasterService",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 10,
        item: "AC Jet Wash Service",
        title: "Jet Wash",
        componentName: "AcJetWash",
        src: "asset/service-icon/washing-machine.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 11,
        item: "AC Dry Servicing Service",
        title: "Dry Servicing",
        componentName: "AcDryServicing",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 12,
        item: "AC Repair Service",
        title: "Repair",
        componentName: "AcRepair",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
      {
        id: 13,
        item: "AC Inspection Service",
        title: "Inspection",
        componentName: "AcInspection",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avail any services for your AC after our Service Provider send a technician at your doorstep then you only have to pay the visiting charge which is BDT 200.",
            ],
          },
          {
            id: 2,
            title:
              "Do I have to pay advance money before availing your service?",
            text: [
              "Of course not! After service completion you will receive a text on your mobile from BD Service Point then you have to pay through Online or Cash on Delivery.",
            ],
          },
          {
            id: 3,
            title: "Is this only for household AC?",
            text: [
              "Definitely not! As long as you want to avail this service for your AC then you can order for your office Air Conditioners too.",
            ],
          },
          {
            id: 4,
            title: "What if they damage my AC?",
            text: [
              "Our professional Service Providers have expert and skilled AC technicians. If they occur any damages to your AC during repairing you will get proper compensation after proper investigation. However, your complaint for any pre-damaged problems will not be considered.",
            ],
          },
          {
            id: 5,
            title: "Do you give Materials/Parts warranty?",
            text: [
              "No. We do not manufacture AC parts by ourselves. So, the warranty differs as per manufacturer. However, we can give you 7 days free service warranty.",
            ],
          },
          {
            id: 6,
            title:
              "Can I buy AC materials/parts by myself and ask your technician to use them?",
            text: [
              "Certainly. You can buy necessary and required materials/parts by yourself. But any operational dysfunctionality won’t be held responsible by our Service Providers and BD Service Point itself.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Appliances",
    services: [
      {
        id: 1,
        item: "CCTV Install & Repair Service",
        title: "CCTV Install & Repair",
        componentName: "CCTVRepairInstall",
        src: "asset/service-icon/cctv.png",
        data: [
          {
            id: 1,
            title: "What can I expect from this service?",
            text: [
              "You can expect a single installer who is able to service a home up to two stories in height using a standard two-section ladder for access to the camera mounting positions. The pro will run and conceal the video cables you supply between the camera and the DVR unit. The camera will require a local power socket and final camera mounting position will be governed by available viewing angles and safe ladder access. A final assessment of camera images will be carried out to confirm that the system is operational following the installation and the pro will show you how to use your new system. Providers are not expected to patch or repair the drywall if holes must be cut to run cables through your walls. Remote viewing setup is not included in the price of this service ",
            ],
          },
          {
            id: 2,
            title: "What do I need to provide for this service?",
            text: [
              "You are responsible for the provision of all equipment, including power strip and recording device, and adequate power sockets in close proximity to the DVR position. If you need the provider to supply the camera system.",
            ],
          },
          {
            id: 3,
            title: "Is accessories cost included in the price mentioned?",
            text: [
              "No. The price mentioned here includes only service charge and not materiel cost.",
            ],
          },
          {
            id: 4,
            title: "What is the minimum service charge for the technician?",
            text: [
              "   If the Total bill is below BDT 200 then the minimum service charge of BDT 200 is applicable.",
            ],
          },
          {
            id: 5,
            title:
              "Is the price mentioned subjected to fluctuation depending on work scope?",
            text: [
              "The price mentioned here are estimated and may vary depending on work scope, service/product availability.",
            ],
          },
          {
            id: 6,
            title: "How long the service will take?",
            text: [
              "CCTV installation service will take up to 2 hours depending on work scope and material availability.",
            ],
          },
          {
            id: 7,
            title: "Do I have to pay any charge if I don't take any service?",
            text: [
              " If you don’t avail any service after provided technician reaches at your doorstep then you only have to pay the visiting charge which is BDT 100.",
            ],
          },
        ],
      },
      {
        id: 2,
        item: "Electric & Plumbing Service",
        title: "Electric & Plumbing",
        componentName: null,
        src: "asset/service-icon/ele-icon.png",
      },
      {
        id: 3,
        item: "Sanitary Service",
        title: "Sanitary Service",
        componentName: "Sanitary",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "Does accessories cost included in service charge?",
            text: [
              "No, additional materials and parts cost are excluded from service charge.",
            ],
          },
          {
            id: 2,
            title:
              "Is the price mentioned subjected to fluctuation depending on work scope?",
            text: [
              " The price mentioned here is estimated and may vary depending on work scope, service/product availability.",
            ],
          },
          {
            id: 3,
            title: "Do I have to pay any charge if I don’t take any service?",
            text: [
              "If you don’t avial any plumbing and sanitary service after provided technician reach at your doorstep then you only have to pay the visiting charge which is BDT 100.",
            ],
          },
        ],
      },
      {
        id: 4,
        item: "Computer Repair Service",
        title: "Computer Repair",
        componentName: null,
        src: "asset/service-icon/computer-repair.png",
      },
      {
        id: 5,
        item: "TV Repair Service",
        title: "TV",
        componentName: null,
        src: "asset/service-icon/tv.png",
      },
      {
        id: 6,
        item: "Geyser Service",
        title: "Geyser",
        componentName: null,
        src: "asset/service-icon/geyser.png",
      },
      {
        id: 7,
        item: "Washing Machine Repair Service",
        title: "Washing Machine",
        componentName: null,
        src: "asset/service-icon/washing-machine.png",
      },
      {
        id: 8,
        item: "Microwave Oven Repair Service",
        title: "Microwave Oven",
        componentName: null,
        src: "asset/service-icon/microwave-oven.png",
      },
      {
        id: 9,
        item: "Water Purifier Services",
        title: "Water Purifier",
        componentName: null,
        src: "asset/service-icon/water-purifier.png",
      },
      {
        id: 10,
        item: "Refrigerator Services",
        title: "Refrigerator",
        componentName: null,
        src: "asset/service-icon/refrigerator.png",
      },
    ],
  },
  {
    id: 4,
    title: "Special Services",
    services: [
      {
        id: 1,
        item: "Beauty & Saloon Services",
        title: "Beauty & Saloon",
        componentName: null,
        src: "asset/service-icon/salon.png",
      },
      {
        id: 2,
        item: "Trip & Travel Services",
        title: "Trip & Travels",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 3,
        item: "Car Rental Service",
        title: "Car Rental",
        componentName: null,
        src: "asset/service-icon/car-care.png",
      },
      {
        id: 4,
        item: "Booking Ticket Services",
        title: "Booking Ticket",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 5,
        item: "Cars & Bikes Services",
        title: "Cars & Bikes",
        componentName: null,
        src: "asset/service-icon/car-care.png",
      },
      {
        id: 6,
        item: "Movers & Packers Services",
        title: "Movers & Packers",
        componentName: "MoversPackers",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "What services do you offer?",
            text: [
              "We offer a full range of packing, moving and storage services. This includes local moves and full packaging services. If you are packing by yourself we can provide boxes and any other packing supplies for you to purchase.",
            ],
          },
          {
            id: 2,
            title: "When should I call a moving company?",
            text: [
              "We ask that you not schedule the move without having a closing date or a confirmed date and time. We recommend that you contact BD Service Point at 01736186865 as soon as you can so that we can accommodate your specific date and time.",
            ],
          },
          {
            id: 3,
            title: "Do I need an estimate?",
            text: [
              "Yes. For small moves, you can get an estimate over the phone from one of our relocation consultants or service provider. For larger moves, upon request, BD Service Point service provider representative will give you a written “Estimated cost of services” after a visual survey of the goods to be moved. There is no charge for the estimate.",
            ],
          },
          {
            id: 4,
            title: "When is the best time to move?",
            text: [
              "There is no “best time” to move because everyone is different in what they need, however, the summer season is always the busiest time of the year.",
            ],
          },
          {
            id: 5,
            title: "How long does it take to move?",
            text: [
              "This depends on many factors, including the time of year, weather conditions, size of your shipment, size of the elevator, the time required to load and unload, and the direction and distances your shipment is travelling.",
            ],
          },
          {
            id: 6,
            title: "How and when will I pay?",
            text: [
              "We accept most forms of payment. This includes, but is not limited too, certified money orders, cash, and most major credit cards, online payment and EMI etc. For service providers, we must take payment at the end of the move.",
            ],
          },
          {
            id: 7,
            title: "Can I pack clothes in my dresser drawers?",
            text: [
              "In general, we recommend that you empty items from all bureaus, desks, dressers, chests, armoires, etc. Lightweight clothing-sweaters, shirts, blouses, lingerie-may be left in light dressers. Do not fill drawers with heavy items, which can damage the piece of furniture during transit.",
            ],
          },
          {
            id: 8,
            title: "Am I protected against loss or damage?",
            text: [
              "Yes. There is a basic valuation that is included with all moves, as well as a few options for increasing this.",
            ],
          },
          {
            id: 9,
            title: "How should I pack my belongings if I am doing it myself?",
            text: [
              "If you choose to do some or all of your own packing in preparation for your relocation, it’s especially important that you be familiar with the techniques that will best protect your possessions. Boxes should be packed tightly with padding after items are inside to prevent shifting during transportation. You can use anything like newspapers, blankets or linens to pack these boxes tight. Keep in mind that a customer packed cartons will not be insured during the move.",
            ],
          },
          {
            id: 10,
            title:
              "Is there an additional charge for elevators or long hallways?",
            text: [
              "No. BD Service Point service provider charges the same rates whether you live in a house on the top floor of a high rise.",
            ],
          },
          {
            id: 11,
            title: "Should I move jewelry and other valuables myself?",
            text: [
              "While service providers can move valuables such as money, jewellery or other items of extraordinary value, we recommend that you carry irreplaceable and expensive articles with you.",
            ],
          },
          {
            id: 12,
            title: "In case of rain, is this going to be a problem?",
            text: [
              "Maybe No. All of your furniture is going to be wrapped in padding or shrink-wrap so you do not need to worry about them getting wet. If you take the packaging service or not.",
            ],
          },
          {
            id: 13,
            title: "Can I ride along on the truck?",
            text: [
              "We cannot allow people other than movers to ride in the truck because for liability purposes.",
            ],
          },
          {
            id: 14,
            title:
              "If unfortunately one of my items is damaged or lost, what should I do?",
            text: [
              "It is very rare that we incur any type of damage during the move. However, if this does occur, please give us a call 16516 urgently when SP present at the location and we will address the issue.",
            ],
          },
          {
            id: 15,
            title: "Is the any service warranty ?",
            text: [
              "Yes, You will also get 7 days service warranty as company policy. This warranty only service quality issue, (ex- AC not working after install.)  Shifting Damage & Lost issue not acceptable after service day.",
            ],
          },
          {
            id: 16,
            title: "What is Fixed Price Meaning?",
            text: [
              "It means Mover cost, Transport cost, carton cost, Electrician cost, carpenter cost etc. fixed by BD Service Point. ",
            ],
          },
          {
            id: 17,
            title: "What is the Fixed Mover cost?",
            text: [
              "One Professional mover 8 hours service time within Dhaka city - 1000tk cost, (Extra 100tk per hour). Outside city price will vary as per requirement.",
            ],
          },
          {
            id: 18,
            title: "What is the Fixed Transport cost?",
            text: [
              "Within city one trip service ->",
              "1 ton / 7 feet pickup- 1700tk",
              "1.5 ton / 9 feet pickup- 2500tk",
              "2 ton / 10 feet pickup-3200tk ",
              "3 ton / 12 feet cover van- 3500tk",
              "5 ton / 16 feet cover van- 5500",
              "(10/12) ton /20 Feet Truck-7000",
              "Outside city service price will vary as per requirement.",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 19,
            title: "What is Covered Van Fixed cost?",
            text: [
              "Within city one trip service ",
              "1 ton / 7 feet- 3000tk",
              "2 ton / 10 feet- 4500tk",
              "3 ton/ 12 feet- 4500tk",
              "4 ton/ 14 feet- 5000tk",
              "5 ton/ 16 feet- 6000tk",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 20,
            title: "What is Packaging cost?",
            text: [
              "Medium Size carton",
              " 150tk/per peace Carton tape",
              " 130tk/ per peace Babble wrap, paper, rope, jute beg, etc.",
              "the price will be very as per requirement.",
            ],
          },
          {
            id: 21,
            title: "What is the AC Shifting cost?",
            text: [
              "1 Ton to 3-Ton AC shifting 2500tk / Peace (without materials & transport).",
            ],
          },
          {
            id: 22,
            title: "What is Carpenter price?",
            text: [
              "Carpenter for furniture dismantle & install 2000tk /Almeira",
            ],
          },
        ],
      },
      {
        id: 7,
        item: "Home Automation Services",
        title: "Home Automation",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 8,
        item: "Event Management Services",
        title: "Event Management",
        componentName: null,
        src: "asset/service-icon/ac-services.png",
      },
      {
        id: 9,
        item: "Pickup & Truck Rental Service",
        title: "Pickup & Truck Rental",
        componentName: "PickupRruckRental",
        src: "asset/service-icon/ac-services.png",
        data: [
          {
            id: 1,
            title: "What services do you offer?",
            text: [
              "We offer a full range of packing, moving and storage services. This includes local moves and full packaging services. If you are packing by yourself we can provide boxes and any other packing supplies for you to purchase.",
            ],
          },
          {
            id: 2,
            title: "When should I call a moving company?",
            text: [
              "We ask that you not schedule the move without having a closing date or a confirmed date and time. We recommend that you contact BD Service Point at 01736186865 as soon as you can so that we can accommodate your specific date and time.",
            ],
          },
          {
            id: 3,
            title: "Do I need an estimate?",
            text: [
              "Yes. For small moves, you can get an estimate over the phone from one of our relocation consultants or service provider. For larger moves, upon request, BD Service Point service provider representative will give you a written “Estimated cost of services” after a visual survey of the goods to be moved. There is no charge for the estimate.",
            ],
          },
          {
            id: 4,
            title: "When is the best time to move?",
            text: [
              "There is no “best time” to move because everyone is different in what they need, however, the summer season is always the busiest time of the year.",
            ],
          },
          {
            id: 5,
            title: "How long does it take to move?",
            text: [
              "This depends on many factors, including the time of year, weather conditions, size of your shipment, size of the elevator, the time required to load and unload, and the direction and distances your shipment is travelling.",
            ],
          },
          {
            id: 6,
            title: "How and when will I pay?",
            text: [
              "We accept most forms of payment. This includes, but is not limited too, certified money orders, cash, and most major credit cards, online payment and EMI etc. For service providers, we must take payment at the end of the move.",
            ],
          },
          {
            id: 7,
            title: "Can I pack clothes in my dresser drawers?",
            text: [
              "In general, we recommend that you empty items from all bureaus, desks, dressers, chests, armoires, etc. Lightweight clothing-sweaters, shirts, blouses, lingerie-may be left in light dressers. Do not fill drawers with heavy items, which can damage the piece of furniture during transit.",
            ],
          },
          {
            id: 8,
            title: "Am I protected against loss or damage?",
            text: [
              "Yes. There is a basic valuation that is included with all moves, as well as a few options for increasing this.",
            ],
          },
          {
            id: 9,
            title: "How should I pack my belongings if I am doing it myself?",
            text: [
              "If you choose to do some or all of your own packing in preparation for your relocation, it’s especially important that you be familiar with the techniques that will best protect your possessions. Boxes should be packed tightly with padding after items are inside to prevent shifting during transportation. You can use anything like newspapers, blankets or linens to pack these boxes tight. Keep in mind that a customer packed cartons will not be insured during the move.",
            ],
          },
          {
            id: 10,
            title:
              "Is there an additional charge for elevators or long hallways?",
            text: [
              "No. BD Service Point service provider charges the same rates whether you live in a house on the top floor of a high rise.",
            ],
          },
          {
            id: 11,
            title: "Should I move jewelry and other valuables myself?",
            text: [
              "While service providers can move valuables such as money, jewellery or other items of extraordinary value, we recommend that you carry irreplaceable and expensive articles with you.",
            ],
          },
          {
            id: 12,
            title: "In case of rain, is this going to be a problem?",
            text: [
              "Maybe No. All of your furniture is going to be wrapped in padding or shrink-wrap so you do not need to worry about them getting wet. If you take the packaging service or not.",
            ],
          },
          {
            id: 13,
            title: "Can I ride along on the truck?",
            text: [
              "We cannot allow people other than movers to ride in the truck because for liability purposes.",
            ],
          },
          {
            id: 14,
            title:
              "If unfortunately one of my items is damaged or lost, what should I do?",
            text: [
              "It is very rare that we incur any type of damage during the move. However, if this does occur, please give us a call 16516 urgently when SP present at the location and we will address the issue.",
            ],
          },
          {
            id: 15,
            title: "Is the any service warranty ?",
            text: [
              "Yes, You will also get 7 days service warranty as company policy. This warranty only service quality issue, (ex- AC not working after install.)  Shifting Damage & Lost issue not acceptable after service day.",
            ],
          },
          {
            id: 16,
            title: "What is Fixed Price Meaning?",
            text: [
              "It means Mover cost, Transport cost, carton cost, Electrician cost, carpenter cost etc. fixed by BD Service Point. ",
            ],
          },
          {
            id: 17,
            title: "What is the Fixed Mover cost?",
            text: [
              "One Professional mover 8 hours service time within Dhaka city - 1000tk cost, (Extra 100tk per hour). Outside city price will vary as per requirement.",
            ],
          },
          {
            id: 18,
            title: "What is the Fixed Transport cost?",
            text: [
              "Within city one trip service ->",
              "1 ton / 7 feet pickup- 1700tk",
              "1.5 ton / 9 feet pickup- 2500tk",
              "2 ton / 10 feet pickup-3200tk ",
              "3 ton / 12 feet cover van- 3500tk",
              "5 ton / 16 feet cover van- 5500",
              "(10/12) ton /20 Feet Truck-7000",
              "Outside city service price will vary as per requirement.",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 19,
            title: "What is Covered Van Fixed cost?",
            text: [
              "Within city one trip service ",
              "1 ton / 7 feet- 3000tk",
              "2 ton / 10 feet- 4500tk",
              "3 ton/ 12 feet- 4500tk",
              "4 ton/ 14 feet- 5000tk",
              "5 ton/ 16 feet- 6000tk",
              "if need extra trip it will be adding another pickup as well as.",
            ],
          },
          {
            id: 20,
            title: "What is Packaging cost?",
            text: [
              "Medium Size carton",
              " 150tk/per peace Carton tape",
              " 130tk/ per peace Babble wrap, paper, rope, jute beg, etc.",
              "the price will be very as per requirement.",
            ],
          },
        ],
      },
    ],
  },
];

export default GalleryItems;
