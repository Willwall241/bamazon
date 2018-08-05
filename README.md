# bamazon

Liri command line app

# Purpose

  Bamazon is a CLI based application that utilizes MySQL. It allows "customers" to purchase "items", and allows "Managers" to adjust "inventory".

# Packages

    mysql
    inquirer
    cli-table

# Instructions

  1. Clone repository

  2. Once you have the repository cloned open the file in Visual studio code or your text editor of choice.

  3. Right click on the main bamazon file and select Open in Command Prompt/Terminal.

  4. Type 'npm install' and hit enter to install the necessary node packages.

  5. Make sure to run Mamp if you dont have it running already.

  6. Copy the code in the schema.sql file and paste into MySQL Workbench or Pro MySQL to create the Database.

  Bamazon Customer

  Type 'node bamazonCustomer.js' in the terminal to run the Customer interface.

    1. The following will load:

  ![Screenshot](media/customer1.PNG)

    2. When prompted input the item_id of the item you would like to purchase and hit enter:

  ![Screenshot](media/customer2.PNG)

    3. Input the how many you would like to purchase and hit enter:

  ![Screenshot](media/customer3.PNG)

  The following table will load when completed:

  ![Screenshot](media/customer4.PNG)

  You can now exit the application by holding now Ctrl/Cmd and hitting 'C'.

  Bamazon Manager

  Type 'node bamazonManager.js' in the terminal to run the Manager interface.

    1. The following will load:

  ![Screenshot](media/manager1.PNG)

    2. You have four options to choose from, use the arrow keys to select and item and hit enter:

      a. Selecting 'View Products for Sale' will load a familiar table to view what items are in stock:

  ![Screenshot](media/manager2.PNG)


      b. Selecting 'View Low Inventory' will load a table of items that have an inventory below five:

  ![Screenshot](media/manager3.PNG)

      c. Selecting 'Add to Inventory' will allow you to add to the inventory of a table:

        i. You will be prompted to input the id of the item's inventory you want to adjust. Then it will ask how many you would like to add:

  ![Screenshot](media/manager4.PNG)


      d. Selecting 'Add New Product' will allow you to add a new product to the inventory:


      i. Input item name when you see this prompt:

  ![Screenshot](media/manager5.PNG)

      ii. Next prompt input the department name for the item:

  ![Screenshot](media/manager6.PNG)

      iii. Input the price of the item:

  ![Screenshot](media/manager7.PNG)

      iv. input how many are in stock:

  ![Screenshot](media/manager8.PNG)

      A table will load at the end showing the added item:

  ![Screenshot](media/manager9.PNG)

  You can now exit the application by holding now Ctrl/Cmd and hitting 'C'.