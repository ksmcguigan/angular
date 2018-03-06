# angular

The current CRM solution provides a static dashboard with inaccurate data, a manual error prone process for generating recipient lists for campaign targeting, and no usage data visualization interactivity to understand data trends. The goal of the Automation Framework is to provide self-service analytics with visualization of the data and automation of the manual processes that currently plague the CRM project. The idea is to empower the users of the data without the need for recurring manual SQL execution. Currently all three user groups require others to execute custom SQL scripts which results in extended delays and data propagation errors.

The proof of concept that was implemented provides a modern 3-tier embedded architecture that has an open front-end code base which leverages Angular NGX. It includes a modular backend currently being serviced by Node.js. Access to the source of truth data would be required as well as building the semantic layer that incorporates the analytics and drives the framework. 

The code for the CRM Framework consists of the following software packages and features:
Angular 4+ & Typescript
Node.js backend
Bootstrap 4+ & SCSS
Responsive layout
Flexibly configurable themes with hot reload
Authentication module
Usage dashboard pages with highchart.js integration
