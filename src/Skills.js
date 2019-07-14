import React from 'react';

function Skill() {
  return (
    <div className="Skill">
      <header className="Skill-header">
        <p class="skillText">
          public class Skill &#123; <br/>
          &nbsp; private String[] coding_languages = &#123;"Assembly language", "C", "C++", "C#", "CSS HTML", "Java", "JavaScript", "Kotlin", "Python", "Solidity", "Ocaml" &#125;; <br/>
          &nbsp; private String[] tools = &#123;"Android Studio", "Google Cloud API", "Linux", "Microsoft Office", "Remix IDE", "Truffle", "Unity3D" &#125;<br/>
          &nbsp; private Map&#60;String, Integer&#62; languages = ImmutableMap.of("Mandarin", 5, "Cantonese",4, "English", 5, "Malay", 4); //Profficiency 1-5<br/>

          &#125;

        </p>
      </header>
    </div>
  );
}

export default Skill;
