/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Becoming A Full Stack Developer",
    date: "July 16, 2019",
    firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at velit in lorem consequat bibendum eu quis massa. Nunc in molestie massa. Suspendisse vel dapibus diam. Pellentesque hendrerit, augue vitae maximus pellentesque, odio ligula viverra nulla, auctor viverra purus ipsum malesuada eros. Suspendisse lobortis nisl et imperdiet malesuada. In fringilla sagittis dui, eu placerat purus semper quis. Cras est est, sagittis ac mollis at, aliquam quis arcu. Donec et mollis dolor. Suspendisse eu arcu condimentum, iaculis massa a, ultrices tellus. Praesent eleifend nunc tortor, id gravida urna lacinia eget. Maecenas tempus faucibus orci at lacinia. Nullam vestibulum dolor suscipit vestibulum malesuada. Donec commodo enim lorem, id laoreet arcu pharetra eget.`,

    secondParagraph: `Maecenas bibendum mauris ligula, eu vulputate urna viverra id. Proin id laoreet purus, ac ullamcorper justo. Praesent eget mattis tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In sodales euismod sem eu congue. Quisque ipsum ligula, porttitor ut commodo sed, pulvinar a nulla. Fusce dignissim auctor erat nec vestibulum. Sed et nunc commodo, viverra elit non, pellentesque ligula. Aliquam bibendum sit amet lacus vel tincidunt. Sed nec odio sed velit viverra imperdiet ac sed ipsum. Aliquam eget lectus a purus finibus scelerisque. Ut fringilla leo ac lacus convallis euismod.`,

    thirdParagraph: ` Maecenas quis congue ex. Phasellus convallis lobortis eros a placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In maximus imperdiet sollicitudin. Integer gravida porttitor massa sed aliquam. Suspendisse suscipit non lacus quis porta. Nulla molestie elit eget nulla hendrerit, a dapibus metus volutpat. Pellentesque eleifend suscipit orci, nec efficitur ligula vehicula nec.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/

class ArticleList {
  constructor(articles) {
    this.articles = articles;
    this.articlesContainer = document.querySelector(".articles");
    this.createArticles();

    this.expandButtons = document.querySelectorAll(".expandButton");
    this.expandButtons.forEach(button =>
      button.addEventListener("click", e => this.changeArticleExpandState(e))
    );

    this.closeButtons = document.querySelectorAll(".close");
    this.closeButtons.forEach(button =>
      button.addEventListener("click", e => this.removeArticle(e))
    );
  }

  createArticles() {
    this.articles.map(article => {
      this.article = document.createElement("div");
      this.article.classList.add("article");
      this.articleH2 = document.createElement("h2");
      this.articleH2.textContent = article.title;
      this.articleDate = document.createElement("p");
      this.articleDate.classList.add("date");
      this.articleDate.textContent = article.date;
      this.articleFirstPara = document.createElement("p");
      this.articleFirstPara.textContent = article.firstParagraph;
      this.articleSecondPara = document.createElement("p");
      this.articleSecondPara.textContent = article.secondParagraph;
      this.articleThirdPara = document.createElement("p");
      this.articleThirdPara.textContent = article.thirdParagraph;
      this.articleExpandButton = document.createElement("span");
      this.articleExpandButton.classList.add("expandButton");
      this.articleExpandButton.textContent = "Click to Expand";
      this.articleCloseButton = document.createElement("span");
      this.articleCloseButton.classList.add("close");
      this.articleCloseButton.textContent = "x";

      this.articlesContainer.appendChild(this.article);
      this.article.appendChild(this.articleH2);
      this.article.appendChild(this.articleDate);
      this.article.appendChild(this.articleFirstPara);
      this.article.appendChild(this.articleSecondPara);
      this.article.appendChild(this.articleThirdPara);
      this.article.appendChild(this.articleExpandButton);
      this.article.appendChild(this.articleCloseButton);
    });
  }

  changeArticleExpandState(e) {
    e.stopPropagation();
    e.currentTarget.textContent =
      e.currentTarget.textContent === "Click to Expand"
        ? "Click to Close"
        : "Click to Expand";
    e.target.parentNode.classList.toggle("article-open");
  }

  removeArticle(e) {
    e.stopPropagation();
    this.articlesContainer.removeChild(e.target.parentNode);
  }
}

const myArticles = new ArticleList(data);
