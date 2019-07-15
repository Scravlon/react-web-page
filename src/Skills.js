import React from 'react';

function Skill() {
  return (
    <div className="Skill">
      <header className="Skill-header">
      <h1>
      Skills
      </h1>
        <p className="skillText">
          public class Skill &#123; <br/>
          &nbsp; private String[] coding = &#123;"Assembly language", "C", "C++", "C#", "CSS", "HTML", "Java", "JavaScript", "Kotlin", "Python", "React", "Solidity", "Ocaml" &#125;; <br/>
          &nbsp; private String[] bestter = &#123;"C++", "Java"&#125;; <br/>
          &nbsp; private String[] tools = &#123;"Android Studio", "Google Cloud API", "Linux", "Microsoft Office", "Remix IDE", "Truffle", "Unity3D" &#125;<br/>
          &nbsp; private String[] interest = &#123;"Artificial Intellegence", "Blockchain", "Mobile Application development" &#125;<br/>
          &nbsp; private Map&#60;String, Integer&#62; languages = ImmutableMap.of("Mandarin", 5, "Cantonese",4, "English", 4, "Malay", 4); //Profficiency 1-5<br/><br/>

          public Skill&#123;<br/>
          &nbsp;   while(true)&#123;<br/>
          &nbsp; &nbsp;    learnNewSkill();<br/>
          &nbsp;&nbsp;&#125;<br/>
           &nbsp;&#125;<br/>
          &#125;<br/>

        </p>
      </header>
    </div>
  );
}

export default Skill;
