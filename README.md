# VoTeX
*Online Assignments Made Easy* - [Demo](https://youtu.be/RdvDZlNwGYE)

## Inspiration

Today, many students and teachers face the need to type out equations and formulas for their science, technology, engineering, and math (STEM) classes. This problem is only made worse by online schooling, forcing teachers and students to either type out their notes and worksheets, or have to handwrite them. 

Typically, many people use solutions like Microsoft Word to type out equations and format their documents, but this can get confusing and difficult. An alternative solution to this is LaTeX, which poses its own problems: it is time consuming, difficult, and confusing to learn and many teachers and students will not learn it. This is where **VoTeX** comes into play. VoTeX makes it easier to go from written or spoken work to LaTeX, via just your voice. 

From personal experience, we have discovered the difficulties in scanning page after page of assignments. Not only is this time consuming and exhausting, but it also limits readability of documents, making it difficult for both teachers and students to communicate fluidly about their work.

## What it does

VoTeX live translates words spoken into the microphone into plain text. Then, this plain text is converted to LaTeX form for ease of access. Users are also able to edit and compile this LaTeX code directly, to edit any mistakes in translation or add to the document. They are able to save PDF or TEX files from this speech and stich together voice recordings for longer and longer assignments. 

## How we built it

### Design
We started by finding the pressure points students and teachers K-12 faced. From there, we created designs on Figma and wireframed various components that we would need.


![image](https://github.com/jasmine-dragons/VoTeX/raw/main/assets/latex-code.png)

*Latex Code View*  
On the left panel of the home page, users can record and view a live transcription of their spoken equations. This data is then sent to our python backend, which uses machine learning to interpret the plain-text as LaTeX.

![image](https://raw.githubusercontent.com/jasmine-dragons/VoTeX/main/assets/written-format.png)

*Written Code View*  
The response is then piped into the right panel, which includes a live LaTeX translation populated by the API’s response. To further customize the audio translation inputted, users can take advantage of the live LaTeX editor and compiler built in to the right panel. Here’s an example of VoTeX in action.

### Code
The frontend is built using React. This was done through a series of components that handled various tasks and usage of other libraries and tools such as Bootstrap and React speech recognition to automate certain tasks. The backend was all created with Python and Flask in order to enable Machine Learning.  

![image](https://user-images.githubusercontent.com/66970460/112744619-8833fd00-8f56-11eb-85b6-95a198aa12c0.png)


## Challenges we ran into
The biggest challenge we ran into was the ability to connect all the parts together and make sure everything was integrated properly to handle some of the edge cases. 

## Accomplishments that we're proud of
It works nicely on a range of types of problems. As we have mostly taken classes up to multivariable calculus, we included things such as integrals, derviatives, and the more standard mathmatical tools such as addition, multiplication, exponentiation, etc. It is a tool that is very useful and that we would use for our own assignments to avoid writing a lot of LaTeX.

## What we learned
We learned how to write LaTeX and how to integrate a system that would be able to convert the voice to text to LaTeX.

## What's next for VoTeX
VoTeX needs to scale and cover more broad range of things and be stress tested under a lot more conditions. We could possible include more complicated NLP code in order to make the content extraction even better. We would also like to add more features such as the ability to save drafts and make it a full fledged online editor.
