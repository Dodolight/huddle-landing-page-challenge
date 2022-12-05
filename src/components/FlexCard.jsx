import React from "react";
import Card from "./Card";
// images
import ConversationImg from "../images/illustration-flowing-conversation.svg";
import GrowImg from "../images/illustration-grow-together.svg";
import UserImg from "../images/illustration-your-users.svg";

function FlexCard() {
  const cards = [
    {
      image: GrowImg,
      text1: "Grow Together",
      text2:
        " Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
    },
    {
      image: ConversationImg,
      text1: " Flowing Conversations",
      text2:
        " You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. ",
      reverse: true,
    },
    {
      image: UserImg,
      text1: "Your Users",
      text2:
        " It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. ",
    },
  ];

  return (
    // Second section
    <div className=" px-7 pb-32 lg:px-20 ">
      <div className="mx-auto container flex flex-col space-y-6 py-10">
        {cards.map((element) => {
          return (
            <Card
              image={element.image}
              {...element}
              imgDesc={element.text1}
              key={element.text1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FlexCard;
