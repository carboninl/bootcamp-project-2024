import React from "react";
import Image from "next/image";
import style from '../blogPages.module.css'

export default function SourCream() {
  return (
    <div>
      <h1 className="pageTitle">I Love Sour Cream</h1>
      <h2 className={style.pageDate}>10/15/2024</h2>
      <Image
        className={style.blogImage}
        src="/sourcream.jpg"
        alt="sour cream"
        width={500}
        height={500}
      />
      <div className={style.contentContainer}>
        <p className={style.blogContent}>
          Sour cream is possibly one of the greatest inventions ever made. Give
          me a burrito bowl and I am dousing it in sour cream. If the top layer
          isn't purely white, I don't want it. Yummers.
        </p>
        <p className={style.blogContent}>
          I love it so much that I want to teach you more. Enjoy!
        </p>
        <p className={style.blogContent}>
          Sour cream (sometimes known as soured cream in British English) is a
          dairy product obtained by fermenting regular cream with certain kinds
          of lactic acid bacteria. The bacterial culture, which is introduced
          either deliberately or naturally, sours and thickens the cream. Its
          name comes from the production of lactic acid by bacterial
          fermentation, which is called souring. Crème fraîche is one type of
          sour cream with a high fat content and less sour taste.
        </p>
        <p className={style.blogContent}>
          Traditionally, sour cream was made by letting cream that was skimmed
          off the top of milk ferment at a moderate temperature. It can also be
          prepared by the souring of pasteurized cream with acid-producing
          bacterial culture. The bacteria that developed during fermentation
          thickened the cream and made it more acidic, a natural way of
          preserving it.
        </p>
      </div>
    </div>
  );
}
