*** Settings ***
Library    SeleniumLibrary
Library    Collections
Library    OperatingSystem
Test Teardown  Close All Browsers

*** Variables ***
${URL}       http://143.198.200.220:8888

#robot -v URL:http://www.google.com hello.robot

*** Test Cases ***
Hello with UI Test
    Try to open in browser   ${URL}  chrome
    Check hello message

*** Keywords ***
Check hello message
    Wait Until Element Contains  id:hello_message   Hello, from spring boot 2023

Try to open in browser
    [Arguments]  ${target_url}  ${browser_type}
    ${target_url}=  Get Environment Variable    FRONTEND_URL
    Open Browser    ${target_url}    ${browser_type} 
    ...  remote_url=http://178.128.29.162:4444
    Maximize Browser Window