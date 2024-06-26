import React from "react";
import './buttons.css';

export default function Collection() {

  /**
   * .shared {
  background: white;
  font-family: Arial;
  color: #36394A;
  cursor: pointer;
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
}



.normal {
  border: 1px solid #E5E7EA;
  box-shadow: inset 0 -1px 2px 0px rgba(18,55,105,0.16);
}

.haptic {
  box-shadow: 0 0 0 1px rgba(18, 55, 105, 0.08),
              0 1px 2px 0 rgba(42, 59, 81, 0.12);
}
.haptic:active {
  box-shadow: 0 0 0 1px rgba(18, 55, 105, 0.08);
}
   */
  // const defaultButton = {
  //   background: 'white',
  //   color: '#36394A',
  //   cursor: 'pointer',
  //   padding: '6px 14px',
  //   border: 'none',
  //   borderRadius: '6px',
  // };
  // const normalButton = {
  //   border: '1px solid #E5E7EA',
  //   boxShadow: 'inset 0 -1px 2px 0px rgba(18,55,105,0.16)'
  // };
  // const hapticButton = {
  //   boxShadow: '0 0 0 1px rgba(18, 55, 105, 0.08), 0 1px 2px 0 rgba(42, 59, 81, 0.12)'
  // };
  // const combinedButton = {
  //   boxShadow: 'inset 0 -1px 2px 0px rgba(18,55,105,0.16), 0 0 0 1px rgba(18, 55, 105, 0.08), 0 1px 2px 0 rgba(42, 59, 81, 0.12)'
  // };

  return (
    <article className="prose prose-invert mx-auto">
      <h1 className="font-cals text-4xl tracking-wider">Collection</h1>

      <p className="lead">Collection of code snippets.</p>

      <h2>Buttons:</h2>
      <section className="flex justify-evenly items-center">
        <div className="bg-gray-200 border border-gray-400 rounded-lg max-w-max p-4">
          <button className="shared normal">Normal</button>
        </div>
        <div className="bg-gray-200 border border-gray-400 rounded-lg max-w-max p-4">
          <button className="shared haptic">Haptic</button>
        </div>
        <div className="bg-gray-200 border border-gray-400 rounded-lg max-w-max p-4">
          <button className="shared combined">Combined</button>
        </div>
        <div className="bg-gray-200 border border-gray-400 rounded-lg max-w-max p-4">
          <button className="shared depress">Depress</button>
        </div>
      </section>
    </article>
  );
}