import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import Block from "../../components/Block/Block";
import './HomePage.css'

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero
        hero_class="container"
        children={ <div className="block"> 
            <Block block="Create Budget" block_class="block-one" />
            <Block block="Create Budget" block_class="block-one" />
            <Block block="Create Budget" block_class="block-one" />
            <Block block="Create Budget" block_class="block-one" />
        </div> }
        heading="Build A Budget"
        sub_heading="for your everyday activities"
        paragraph="With Budgee you can build a budget to suit your daily needs, 
                help save money towards certain goals "
      />

        <Hero
            hero_class="container reverse"
            children={ <img src="" className="img"/> }
            heading="Build A Budget"
            sub_heading="for your everyday activities"
            paragraph="With Budgee you can build a budget to suit your daily needs, 
                    help save money towards certain goals "
        />

        <Hero
            hero_class="container "
            children={ <img src="" className="img"/> }
            heading="Build A Budget"
            sub_heading="for your everyday activities"
            paragraph="With Budgee you can build a budget to suit your daily needs, 
                    help save money towards certain goals "
        />
    </div>
  );
};

export default HomePage;
