import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {

  panelOpenState = false;

  faqs = [
    {
      title: "What is Afrimart.com?",
      content: "Afrimart is Africa’s first Pan-continental online business-to-business trade platform. The platform is designed to create new business opportunities for African SMEs, general merchants and service providers on the quest for growth and expansion by creating visibility, information and accessibility to African buyers and suppliers, both locally and globally.",

    },
    {
      title: "What are the benefits of joining Afrimart?",
      content: "<ul><li> Visibility and accessibility to African buyers and suppliers</li><li> Free membership for a year</li><li> Payment security</li><li> Supplier verification</li><li> Network of logistics partners</li><li> Location based lead generation</li><li> Ecosystem of World class payment partners</li><li> Business tools for sellers: analytics, inventory management, selling tips, etc.</li><li> Multi-lingual platform</li><li> Growth and scale opportunity for African manufacturing industries</li></ul>",

    },
    {
      title: "Is there a fee to join Afrimart?",
      content: `Yes, Afrimart has 4 subscription levels; <strong>Free, Silver, Gold and Platinum</strong> premium services, <a href="https://p.afrimart.com/#/become-a-supplier">Click here</a> to see details of each subscription level`,

    },
    {
      title: "Does Afrimart sell products?",
      content: "No, Afrimart is neither a supplier nor a buyer. Afrimart facilitates B2B trade across Africa by bringing buyers and sellers together",

    },
    {
      title: "How do I place an order?",
      content: "<ul><li> 1.	Search for the product(s) you want OR request a quotation for the product and a matched supplier(s) may respond to you</li><li> 2. Once you’ve identified your desired product, contact the supplier to initiate the buying process.</li><li> 3. Once you’re ready to make a payment, Afrimart will recommend suitable options like our Secure Escrow Platform or our verified payment partners.</li></ul>",

    },
    {
      title: "From search results, how can I contact the supplier?",
      content: "Once you’ve identified the product you are searching for, a list of suppliers that have the product in stock will be made available to you. Click on the <strong>Contact Supplier</strong> button to initiate contact."
    },
    {
      title: "Can I have a copy of my Invoice from you?",
      content: "Invoices are provided by the supplier.",

    },
    {
      title: "How do I change the price to my local currency?",
      content: "All prices on Afrimart are displayed in your local currency as well as the equivalent US Dollar rate.",

    },
    {
      title: "What is the Badges of Excellence Program and how do I join?",
      content: "These badges are obtained when a supplier pays for subscriptions or is recommended to Afrimart by a trusted partner. Other badges are obtained when a supplier attains a certain volume of sales. These badges indicate a Supplier’s level of Trust, and KYC",

    },
    {
      title: "How do I become a verified seller? What are the advantages?",
      content: `To join, you need to have your business profile information verified. <a href="https://p.afrimart.com/#/become-a-supplier">Click here</a> and follow the steps to get verified.`,

    },
    {
      title: "What currency do you accept?",
      content: "■	We accept US dollars, and most local African currencies.",

    },
    {
      title: "How do I access other language versions of Afrimart.com?",
      content: "On the right side of the menu, click on the English icon to view a drop down of other available languages.",

    },
    {
      title: "Does Afrimart provide a shipping service?",
      content: "■	Yes, when you are able to complete a transaction a list of logistics partners will be displayed for you to choose from.",

    },
    {
      title: "What are Leads?",
      content: "■	Leads are information on available products and services. Leads are generated by suppliers to attract buyers by making them aware of the availability of these products and services at specified times and perhaps locations. These leads are often matched with buyer product and services requests through our Leads Exchange engine in order to connect the Buyer directly with the Supplier of specified products on their wish list.",

    },
    {
      title: "What are the forbidden items in international shipping?",
      content: "They are, but not limited to the following: <ul><li> Bullion (of any precious metal) –This can be traded through our special services</li><li> Cash (legal tender - bank notes, currency notes and coins)</li><li> Complete firearms, ammunition, explosives / explosive devices</li><li> Human remains or ashes</li><li> Hunting (animal) trophies, animal parts such as ivory and sharks fin, animal remains or ashes, or animal by-products and derived products not intended for human consumption, prohibited for movement by the CITES Convention and/or local law</li><li> Illegal goods, such as counterfeit goods and narcotics</li><li> Live animals (including but not limited to mammals, reptiles, fish, invertebrates, amphibians, birds, insects, larvae and pupae) (tradeable through only our special services)</li><li> Loose lithium metal batteries under IATA PI968 section II</li><li> Loose precious and semi-precious stones (cut or un-cut, polished or un-polished) (tradeable through only our special services)</li></ul>",

    },
    {
      title: "Does Afrimart provide refunds?",
      content: "■	An order can either be placed Online via the Afrimart platform or Offline through direct communication with the supplier. Afrimart can only protect orders performed through our platform using our escrow services and other specialized & payment services. Doing so allows us the ability to track your order and thus provide a refund in the case of a dispute. We recommend that you trade with verified suppliers using our special services such as escrow.",

    },
    {
      title: "Does Afrimart have a physical office?",
      content: "■	Afrimart’s physical offices are for administrative and support purposes only. Afrimart is an online business-to-business marketplace. We do not have a physical store office.",

    },
    {
      title: "How do I improve the search result ranking for my products?",
      content: `<ul><li>■	Use popular keywords and add as much relevant information in the product detail as possible.</li><li>■	You can also purchase <strong>Listing Preference</strong> to increase the visibility of your product in the search result.</li></ul>`

    },
    {
      title: "How do I attract more buyers?",
      content: "<ul><li>Become a verified seller</li><li> Make sure the product picture has a high resolution (always use flash on the camera, even in natural light).  Be sure that the environment is clean and attractive to look at.</li><li> Close-up pictures draw more attention</li><li> Create catchy headings with popular keywords</li><li> Don’t overemphasize or be too dramatic when describing the product, it comes off as dishonest…keep it as simple and detailed as possible</li><li> Be competitive with prices, make sure you are within the range of other similar product offerings</li><li> Maintain a high seller’s rating <ul><li> Keep Maintain great communication with buyers, respond to emails and other forms of communication quickly </li><li> Ship within 24 hours if possible, otherwise, keep it within the stated timeframe</li><li> Keep your customer as happy as possible</li><li> Be as honest and accurate about the product (this prevents returns)</li><li> Leave positive feedbacks for buyers and they will more than likely, do the same</li></ul></li></ul>",

    },
    {
      title: "How do I track my order?",
      content: "■	Once payment has been made for a product you can track your order by following up with your logistics company of choice ",

    },
    {
      title: "How can I search/contact potential buyers on Afrimart?",
      content: "■	On the bottom of the website, click <strong>Purchase Leads</strong> under the <strong>Supplier's Tool Kit</strong> Category. Once you’ve been directed to the page, follow the instructions to purchase your specified purchase leads. Once purchased, you will have access to the buyer’s contact information in which you can send him/her a quotation, request to call him/her, or simply send a message.",

    },
    {
      title: "Can I pay for the product after I receive?",
      content: "Afrimart offers an escrow service which only releases funds once goods are delivered and verified. Buyers are advised to use our special payment services. In cases where buyers use direct negotiations and payment options, Payment is made prior to shipping. You and your supplier may however, negotiate paying on delivery.",

    },
    {
      title: "Who are Verified Suppliers and what is the benefit of becoming one?",
      content: "■	Verified suppliers are those whose contact and bank information have been verified by Afrimart, and have also bought a premium subscription. Buyers are more likely to conduct business with verified suppliers. Afrimart also cautions against trading with unverified suppliers",

    },
    {
      title: "From search results, how can I contact the supplier?",
      content: "Once you’ve identified the product you are searching for, a list of suppliers with that product in stock will be made available to you. Click on the <strong>Contact Supplier</strong> button to initiate contact.",

    },
    {
      title: "How does Afrimart resolve disputes between buyers and suppliers?",
      content: "■	Afrimart recommends that users trade with verified suppliers. This leads to much fewer incidents of disputes, as well as making it easier to identify suppliers in question and therefore increasing the possibility of positive resolution.",

    },
    {
      title: "Does Afrimart take responsibility for any fraudulent activities?",
      content: "■	In the case of a fraudulent activity involving a verified user, Afrimart will conduct proper investigations. However, in fraudulent activities involving unverified users, Afrimart does not take responsibilities as buyers are cautioned when transacting with unverified users to which Afrimart has Disclaimer.",

    },
    {
      title: "What if the supplier fails to deliver the agreed product after payment?",
      content: `■	When using Afrimart supported Escrow services payments are only disbursed to a supplier once the buyer has confirmed that the agreed upon product has been received and the same verified. In the rare occasion that such a situation arises, and Afrimart has confirmed the validity of this claim, the payment will not be disbursed to the supplier and will be refunded back to the buyer’s account. <ul><li>1.	In the case of purchases made through payments outside the Afrimart special services, please see our Disclaimer.</li></ul>`

    }
  ]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
