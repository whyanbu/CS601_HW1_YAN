# Newsletter Subscription Form
A webpage for register a subscription of newsletter by providing basic personal information

## Table of Contents
Features  
Installation  
Usage  
Project Structure
Email Address Validation

### Features
Written with vanilla JavaScript without CSS frameworks.


### Installation
Clone the repository:

bash  
git clone https://github.com/whyanbu/CS601_HW1_YAN.git  
cd CS601_HW1_YAN  
Open index.html directly in your web browser.  

No build or dependencies needed.  

### Usage
All application logic is in the /scripts directory.  

Start the app by opening index.html.  

### Project Structure
```
CS601_HW1_YAN/  
│  
├── scripts/  
│   └── main.js  
├── css/  
│   └── main.css  
├── index.html
├── .gitignore  
└── README.md  
```
index.html: Entry point for the app.  

### Email Address Validation
Regular Expression is used to validate the input email address.  The expression used is:
^[a-zA-Z]+[a-zA-Z0-9\.]*[a-zA-Z0-9]+@[a-zA-Z]+[\.][a-zA-Z]+

The validation rules are listed as follows:
Usernmae should start with a-z or A-Z
Username should end with a-z or A-Z or 0-9
Dot "." is allowed in username but not at the beginning or end
Username should contains at least 2 characters
Symbol "@" must be present exactly once
Username must be immediately before the @ symbol
Symbol "@" must be followed by a domain name
Domain name should be at least one letter of a-z or A-Z then followed by a dot "." and followed by at least one letter of a-z or A-Z
numbers not allowed in domain name