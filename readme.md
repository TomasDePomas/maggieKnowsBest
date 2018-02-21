Installation:
* clone repo
* ``cd AlexaSaisNo && npm install``
* install the aws cli and connect to a lambda account
* run ```./compile.sh``` to deploy the code to lambda
* in your skill, attach a function to actOutScenarioOne that only has a list as slots bound to it like so:

```
actOutScenarioOne {Sentence} 
actOutScenarioOne {Sentence} {Sentence}  
actOutScenarioOne {Sentence} {Sentence} {Sentence}   
actOutScenarioOne {Sentence} {Sentence} {Sentence} {Sentence} 
actOutScenarioOne {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} 
actOutScenarioOne {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} 
actOutScenarioOne {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} 
actOutScenarioOne {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} {Sentence} 
```
