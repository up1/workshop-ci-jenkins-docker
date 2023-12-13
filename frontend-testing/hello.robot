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
    Wait Until Element Contains  xpath://*[@id="root"]/div/button[1]   Add New merchant...
    Wait Until Element Contains  xpath://*[@id="root"]/div/button[2]   Delete merchant
    Wait Until Element Contains  xpath://*[@id="root"]/div/button[3]   Update merchant

Try to open in browser
    [Arguments]  ${target_url}  ${browser_type}
    ${target_url}=  Get Environment Variable    FRONTEND_URL
    Open Browser    ${target_url}    ${browser_type} 
    ...  remote_url=http://167.172.64.144:4444
    Maximize Browser Window
