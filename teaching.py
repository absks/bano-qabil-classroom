"""Editable teacher-script builder. Run via build.py after editing teaching.json."""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parent
GUIDES=json.loads((ROOT/'teaching.json').read_text())
GLOSSARY={
'CMS':'Content management system: software for creating and changing website content.',
'API':'Application programming interface: an agreed way for one program to request a service from another.',
'RAG':'Retrieval-augmented generation: find relevant source text, then use it to help draft an answer.',
'LLM':'Large language model: a model trained on large amounts of text to process and generate language.',
'NLP':'Natural language processing: computer methods for working with human language.',
'SEO':'Search engine optimisation: making a site easier for search engines and people to understand.',
'GA4':'Google Analytics 4: a tool for measuring activity on websites and apps.',
'CTA':'Call to action: the next step you ask the reader to take.',
'CTR':'Click-through rate: clicks divided by impressions, usually shown as a percentage.',
'KPI':'Key performance indicator: a measurement chosen to track an important goal.',
'CSV':'Comma-separated values: a plain-text format for rows and columns of data.',
'JSON':'JavaScript Object Notation: a structured text format for storing or exchanging data.',
'RAM':'Random access memory: temporary working space used while a computer runs.',
'CPU':'Central processing unit: the component that carries out program instructions.',
'URL':'Uniform resource locator: the address of a resource such as a webpage.',
'HTML':'HyperText Markup Language: markup that describes the structure of a webpage.',
'CSS':'Cascading Style Sheets: rules that control how webpage content looks.',
'PHP':'A programming language used by WordPress on the server.',
'MFA':'Multi-factor authentication: using different kinds of proof to sign in, such as a password and a security key.',
'IoT':'Internet of Things: physical devices with network connections, such as smart cameras.',
'CIA':'Confidentiality, integrity, and availability: keeping information private, correct, and accessible to authorised people.',
'OS':'Operating system: software that manages a device and supports applications.',
'OOP':'Object-oriented programming: organising related data and behaviour into objects.',
'QA':'Quality assurance: planned checks that help confirm work meets its requirements.',
'HTTP':'Hypertext Transfer Protocol: rules used for requests and responses on the web.',
'HTTPS':'HTTP protected by encryption in transit; it does not guarantee that the site owner is honest.',
'overfitting':'Learning the training examples too closely and performing poorly on new examples.',
'baseline':'A simple starting result used for comparison.',
'fine-tuning':'Training an existing model further on selected examples to adapt its behaviour.',
'prompt':'The instructions and information given to a model for a task.',
'plugin':'An add-on that gives software an extra feature.',
'cache':'A stored copy used to avoid repeating work; it may need refreshing when content changes.',
'permalinks':'The lasting URL pattern used for website pages and posts.',
'embeddings':'Lists of numbers representing features of data, often used to compare meaning or similarity.',
'classification':'Choosing a category for an input, such as positive or negative sentiment.',
'phishing':'A deceptive message or site that tries to make someone reveal information or take an unsafe action.',
'ransomware':'Malicious software that blocks access to data or systems and demands payment.',
'least privilege':'Giving only the access needed to do an assigned job.',
'consent':'Clear agreement to a stated use or action.',
'conversion':'A chosen useful action, such as completing an enquiry form.',
'workflow':'A sequence of steps used to complete a task.',
'rubric':'A marking guide that explains what earns points.'
}
def easy(t):
 for a,b in {'utilize':'use','utilise':'use','demonstrate':'show','Demonstrate':'Show','verify':'check','Verify':'Check','implement':'build','Implement':'Build','configure':'set up','Configure':'Set up','deliberately':'with a clear purpose','credentials':'sign-in details','artifact':'work sample','artifacts':'work samples','submission':'submitted work','prerequisites':'things needed first','evaluate':'check','Evaluate':'Check'}.items():
  t=re.sub(r'\b'+a+r'\b',b,t)
 return t

def enrich(c):
 for l,g in zip(c['lessons'],GUIDES[c['id']]):
  big,analogy,flow,misconception=g
  l['simple']={'idea':big,'analogy':analogy,'flow':flow.split('|'),'mistake':misconception}
  raw=' '.join([l['title'],l['summary'],*l['objectives'],*[v for slide in l['slides'] for v in [slide['title'],*slide['points'],slide['example']]],l['lab']['example'],*l['lab']['points']])
  terms=[(k,v) for k,v in GLOSSARY.items() if (k not in ['classification','prompt'] or c['id'] in ['bq023','bq024']) and re.search(r'\b'+re.escape(k)+r'\b',raw,re.I)]
  l['glossary']=terms
  l['summary']=easy(l['summary'])
  l['objectives']=[easy(x) for x in l['objectives']]
  for s in l['slides']:
   s['points']=[easy(x) for x in s['points']];s['example']=easy(s['example'])
  scripts=[]
  scripts.append({'time':'00–10 min','title':'Welcome and connect the idea','slide':1,'say':[
   f"Assalamu alaikum, everyone. Today we are learning about {l['title'].lower()}. Our main idea is simple: {big.lower()}. You do not need to remember every new word immediately. We will understand an example, watch a demonstration, and practise together.",
   analogy,
   "By the end, these are the three things we want to be able to do: "+' '.join(l['objectives'])+" Keep these goals beside your notebook. At the end, you will show your work and explain one choice you made.",
   "Before we begin, tell your partner what you already know about this topic. It is fine to say that it is new. I will listen to two answers, then we will build the idea together."],
   'do':'Open slide 1. Read the three goals slowly. Draw the three-part visual on the board. Give pairs one minute to discuss, then take two answers.',
   'ask':f"How would you explain this idea to a friend: {big.lower()}?",
   'answer':analogy})
  for i,s in enumerate(l['slides']):
   scripts.append({'time':f'{10+i*6:02d}–{16+i*6:02d} min','title':s['title'],'slide':i+2,'say':[
    f"The next topic is: {s['title']}. Start with this point: {s['points'][0]} Read it with me once. Now I will connect it to a practical situation.",
    f"Here is the example: {s['example']} Notice the details in that example. We need to explain what is happening, not just memorise the name of the tool or feature.",
    f"The next point is how we use the idea: {s['points'][1]} I will show this slowly. Watch what I start with, the step I take, and the result. Before I finish, predict what you expect to see.",
    "Now explain the example to your partner in your own words. Begin with: 'The main idea is...' Then say: 'We use it when...' If a term is confusing, ask me and we will use the plain-language word guide.",
    f"Let us check our explanation. The key point is: {s['points'][0]} If your explanation disagrees with this, return to the example and find the part you need to change."],
    'do':('Show the code exactly as printed. Explain the input before running it and compare the result with the example. ' if s.get('code') else 'Use the example on this slide as a board demonstration or a prepared practice file. ')+'Pause after each action. Give learners thirty seconds to predict the result, then invite one learner to explain it.',
    'ask':f"In the example for {s['title'].lower()}, what should we do or notice, and why?",
    'answer':s['example']+' '+s['points'][1]})
  scripts.append({'time':'40–45 min','title':'Start the practical work','slide':7,'say':[
   "We will now use the ideas ourselves. Here is our task: "+l['lab']['example'],
   "Your finished work should include this: "+l['lab']['deliverable'],
   "I will model the first step, then you will work in pairs. One person controls the computer and the other reads the steps and checks the result. Swap roles halfway through so both of you practise. Use the sample data supplied for class.",
   "If your screen looks different from mine, do not click randomly. Tell me what you see and what you expected. We will identify the step where the result changed."],
   'do':easy(l['notes'][1]),'ask':'What must you submit at the end of the lab?','answer':l['lab']['deliverable']})
  for i,step in enumerate(l['lab']['points']):
   scripts.append({'time':f'{45+i*6:02d}–{51+i*6:02d} min','title':f'Practical step {i+1}','slide':7,'say':[
    f"Our next step is this: {easy(step)} Read the instruction before touching the keyboard. Tell your partner what you plan to do, then make the change.",
    "Stop and inspect your result before moving on. Keep the file or output so we can review it together. If the result differs from the task, describe the difference and repeat only the part that needs correction."],
    'do':f"Coach this specific step: {easy(step)} Ask a pair to show their result. Use the expected-results notes at the start of this guide to judge the complete task.",
    'ask':'What did you change in this step, and how did you check it?', 'answer':f"Learners should describe the action in this instruction and show the corresponding result: {easy(step)}"})
  scripts.append({'time':'69–75 min','title':'Review the practical result','slide':7,'say':[
   "Please save your work and look at the submission requirements again. "+l['lab']['deliverable'],
   "Here is what we are checking: "+easy(l['notes'][2]),
   "A common misunderstanding is worth correcting now. "+misconception,
   "Show your partner one part that works and one part you would improve. Explain your evidence. Saying 'it works' is a start, but showing how you checked it is better."],
   'do':'Use the marking guide at the start of this guide. Give one specific strength and one next step to each pair you review.','ask':'What is the main mistake we should avoid?','answer':misconception})
  scripts.append({'time':'75–85 min','title':'Quiz and answer discussion','slide':None,'say':[
   "Open the weekly Quiz tab. Answer the five questions on your own first. This is a practice check, so use mistakes to find what needs another explanation. Read all four choices before deciding.",
   "After submitting, read the explanation under each question. If you selected a different answer, tell me why you chose it. We will compare the reasoning, then you can try again."],
   'do':'Give five minutes for the first attempt and five minutes for discussion. The complete questions, correct answers, and explanations are printed below.','ask':'Which answer did you change your mind about after reading the explanation?','answer':'Accept a specific question and an explanation consistent with its answer key. Ask the learner to connect it to today’s example.'})
  scripts.append({'time':'85–90 min','title':'Close the lesson and set homework','slide':1,'say':[
   "Let us finish with the main idea again: "+big+". Think back to the example we used at the beginning. Now you should be able to explain the idea and show a small piece of work.",
   "Before you leave, write two short sentences. First: 'Today I learned...' Second: 'I checked my work by...' Add one question if you still need help.",
   "For homework, "+easy(l['notes'][4]).rstrip('.')+". Bring your result or a clear description of where you got stuck. We will use that to decide what to review next time.",
   "Thank you for your effort today. Save your files with a name you can find again. Being able to explain your work matters as much as finishing it."],
   'do':'Collect the exit tickets. Note any repeated misunderstandings for the next class.','ask':'What can you now do that you could not do at the start?','answer':'Accept evidence tied to one of the three learning goals. Ask for a concrete example rather than only a topic name.'})
  l['script']=scripts
 return c
