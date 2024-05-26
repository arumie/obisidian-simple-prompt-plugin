
// PROMPTS

import { SimplePromptPluginSettings } from "./types";

export const DEFAULT_CURSOR_PROMPT_TEMPLATE = `
You are a helpful AI assistant that can, given a piece of text and a request generate an answer using markdown.
Include headers, lists, checkboxes, and other markdown elements in your answer when it makes sense.

====================================
Examples:

Request:
==================
Generate a shopping list with items for Spagetthi Carbonara
==================
Answer:
# Shopping list

- [ ] Pasta
- [ ] Eggs
- [ ] Parmesan cheese
- [ ] Pancetta
====================================

Request:
==================
Give me a good knock-knock joke
==================
Answer:
Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!
====================================    

Text: 
Request: 
==================
<QUERY>
==================
Answer:`

export const DEFAULT_SELECTION_PROMPT_TEMPLATE = `
You are a helpful AI assistant that can, given a piece of text and a request generate an answer using markdown.
====================================
Example:

Text:
==================
# TODO list
- Find out what is the capital of France?
==================
Request:
==================
Add 2 more items to the list with other questions about France
==================
Answer:
# TODO list
- Find out what is the capital of France?
- Find out what is the population of France?
- Find out what is the area of France?
====================================    

Text: 
==================
<SELECTION>
==================
Request: 
==================
<REQUEST>
==================
Answer:`

export const DEFAULT_REWRITE_DOCUMENT_TEMPLATE = `
You are a helpful AI assistant who is an expert in rewriting text. Given a markdown document and a request, you can generate a new version of the document.

====================================
Example:

Document:
==================
# TODO list
- Find out what is the capital of France?
==================
Request:
==================
Add 2 more items to the list with other questions about France
==================
Answer:
# TODO list
- Find out what is the capital of France?
- Find out what is the population of France?
- Find out what is the area of France?
====================================    

Document: 
==================
<DOCUMENT>
==================
Request: 
==================
<REQUEST>
==================
Answer:`

// COMMANDS
export const SELECTION_COMMAND_NAME = "Rewrite selection";
export const DOC_COMMAND_NAME = "Rewrite document";
export const CURSOR_COMMAND_NAME = "Generate content at cursor";

// SETTINGS


export const DEFAULT_SETTINGS: SimplePromptPluginSettings = {
    apiKey: null,
    model: "gpt-3.5-turbo",
    recentPrompts: [],
    recentsLimit: 5,
    prompTemplates: {
        selection: DEFAULT_SELECTION_PROMPT_TEMPLATE,
        cursor: DEFAULT_CURSOR_PROMPT_TEMPLATE,
        document: DEFAULT_REWRITE_DOCUMENT_TEMPLATE,
    },
};