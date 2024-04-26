// The object 'Contracts" will be injected here which contains the ABI, address of your deployed contract and endpoint
var Contracts = {
    PharmaceuticalSupplyChainContract: {
        abi: [
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "balances",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    }
                ],
                "name": "deleteProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    }
                ],
                "name": "getOwner",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "transDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "walletAddress",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    }
                ],
                "name": "getProduct",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "productName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "manuDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "exDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "title",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "transDate",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "mintCoins",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "productCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_productname",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_manuDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_exDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_title",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_transDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "registerNewProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "sendCoins",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_productname",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_manuDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_exDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "_title",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_transDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_productId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_productName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_manuDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_exDate",
                        "type": "uint256"
                    }
                ],
                "name": "updateProduct",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        address: "0x0cffb8193f38a6a4e34ae8fdcf27dd2df9e60f58",
        endpoint: "https://sepolia.infura.io/v3/"
    }
}

function Pharmaceutical(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}

Pharmaceutical.prototype.onReady = function () {
    this.init(function () {
        $('#message').append("DApp loaded successfully.");
    });
    this.bindButtons(); //bind the button to their respective functions
    this.loadProductRegistration();// call the loadProductRegistration function to displaythe product registration list
}

Pharmaceutical.prototype.init = function (cb) {
    // enable and connect to MetaMask
    if (window.ethereum) {
        this.web3 = new Web3(ethereum);
        try {
            ethereum.enable();
        } catch (error) {
        }
    }
    // Create the contract interface using the ABI provided in the configuration.
    var contract_interface = this.web3.eth.contract(this.Contract.abi);
    // Create the contract instance for the specific address provided in the configuration.
    this.instance = contract_interface.at(this.Contract.address);
    cb();
}
if (typeof (Contracts) === "undefined") var Contracts = { PharmaceuticalSupplyChainContract: { abi: [] } };
var pharmaceutical = new Pharmaceutical(Contracts['PharmaceuticalSupplyChainContract']);
$(document).ready(function () {
    pharmaceutical.onReady();
});

// Function to format Unix timestamp to a readable date
function formatUnixTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString(); // Adjust formatting based on your preference
}

//Calls the productCount function in the smart contract
Pharmaceutical.prototype.getProductCount = function (cb) {
    this.instance.productCount(function (error, productCount) {

        cb(error, productCount);
    });
};

// Calls the productList function in the smart contract
Pharmaceutical.prototype.getProduct = function (productId, cb) {
    //this.instance.productList(productId, function (error, product) {
    this.instance.getProduct(productId, function (error, product) {

        cb(error, product);
    });
};


// Function to format a Unix timestamp to "mm/dd/yyyy" format
function formatDate(date) {
    var d = new Date(date * 1000);
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    var year = d.getFullYear();
    return day + '/' + month + '/' + year;
}

// Load function
// Gets the number of houses. Using a for loop, iterate through the list to get each house.
//Bind the house details (house number and owner) to the #houseListResults object in app.html
Pharmaceutical.prototype.loadProductRegistration = function () {
    var that = this;
    this.getProductCount(function (error, productCount) {
        if (error) {
            console.log(error)
        }
        $("#message").text("Product Count: " + productCount);
        $("#productListResults").empty(); //empty the house registration list table
        for (let i = 1; i <= productCount; i++) {
            var productId = i;
            that.getProduct(productId, function (error, product) {
                if (error) {
                    console.log(error)
                }
                var id = product[0];
                var name = product[1];
                var mdate = formatDate(product[2]);
                var edate = formatDate(product[3]);
                var company = product[4];
                var title = product[5];
                var transDate = formatDate(product[6]);
                var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + mdate + "</td><td>" + edate + "</td><td>" + company + "</td><td>" + title + "</td><td>" + transDate + "</td></tr >"
                $("#productListResults").append(productTemplate);
            });
        }

        var nextProductCount = productCount.toNumber() + 1; //find the next number
        $("#newProductId").val(nextProductCount) //set the value of the next ProductId in the Product Id textbox
        $("#newProductId").attr('disabled', true) //disable entry in the Product Id textbox
    });
}

// View all transactions


Pharmaceutical.prototype.bindButtons = function () {
    var that = this;

    $(document).on("click", "#button-register", function () {
        that.registerNewProduct(); //call the registerNewProduct function when the button-register is clicked
    });
    $(document).on("click", "#button-transfer", function () {
        that.transferProduct(); // call the transferProduct function when the button-transfer is clicked
    });
    $(document).on("click", "#button-retrieve", function () {
        that.retrieveProduct(); // call the retrieveProduct function when the button-transfer is clicked
    });
    $(document).on("click", "#button-delete", function () {
        that.deleteProduct(); // call the deleteProduct function when the button-transfer is clicked
    });
    $(document).on("click", "#button-balance", function () {
        that.showAddressBalance(); // call the showAddressBalance function when the button-balance is clicked
    });
}


// Register function
Pharmaceutical.prototype.registerNewProduct = function () {
    // Get input for ProductId, ProductName, Manufacture Date, Expiry Date, title ... 
    var newProductId = $("#newProductId").val();
    var newProductName = $("#newProductName").val();
    var newManu = Date.parse($("#newManu").val()) / 1000;   // Convert to Unix timestamp
    var newEx = Date.parse($("#newEx").val()) / 1000;       // Convert to Unix timestamp
    var Manu = formatDate(newManu);
    var Ex = formatDate(newEx);       
    var newCompanyName = $("#newCompanyName").val();
    var newtitle = $("#newtitle").val();
    var newtrans = Date.parse($("#newtrans").val()) / 1000; // Convert to Unix timestamp
    var trans = formatDate(newtrans);
    var newAddress = $("#newAddress").val();
    var newAmount = $("#newAmount").val();


    // Check if any of the required fields are empty
    if (
        newProductId.trim() === '' ||
        newProductName.trim() === '' ||
        isNaN(newManu) ||
        isNaN(newEx) ||
        newCompanyName.trim() === '' ||
        newtitle.trim() === '' ||
        isNaN(newtrans) ||
        newAddress.trim() === '' ||
        newAmount.trim() === ''
    ) {
        alert("Please fill in all required fields.");
        return; // Exit the function early if any field is empty
    }

    // Check if newProductName contains only alphabetic characters
    if (!/^[a-zA-Z\s]+$/.test(newProductName)) {
        alert("Product Name must contain only alphabetic characters.");
        return;
    }

    // Check if newManu is in the past or today
    var today = new Date().getTime();
    if (newManu > today) {
        alert("Manufacture date must be in the past or today.");
        return;
    }

    /*/ Check if newEx is one year after newManu
    var oneYearAfterManu = new Date(newManu);
    oneYearAfterManu.setFullYear(oneYearAfterManu.getFullYear() + 1);
    if (newEx !== oneYearAfterManu.getTime()) {
        alert("Expiry date must be one year after manufacture date.");
        return;
    }

    // Check if newtrans is today
    if (newtrans !== today.getTime()) {
        alert("Transaction date must be today.");
        return;
    }*/

    // Check if newCompanyName contains only alphabetic characters
    if (!/^[a-zA-Z\s]+$/.test(newCompanyName)) {
        alert("Company Name must contain only alphabetic characters.");
        return;
    }

    // Check if newtitle contains only 
    if (!(newtitle === "Manufacturer" || newtitle === "Supplier")) {
        alert("Position / Title must be either 'Manufacturer' or 'Supplier'.");
        return;
    }

    // Check if newAddress contains only alphanumeric characters
    if (!/^[a-zA-Z0-9]+$/.test(newAddress)) {
        alert("Wallet Address must contain only alphanumeric characters.");
        return;
    }

    // Check if newAmount contains only numbers
    if (!/^\d+$/.test(newAmount) || parseInt(newAmount) < 100) {
        alert("Amount must contain only numbers and at least 100.");
        return;
    }

    $("#message").text("Registering " + newProductId + ", " + newProductName + " Date " + Manu + " - " + Ex + " to " + newCompanyName + ", " + newtitle + " on " + trans);

    this.instance.registerNewProduct(newProductName, newManu, newEx, newCompanyName, newtitle, newtrans, newAddress, newAmount,
        //gas required to execute the transaction
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function () {
            if (error) {
                console.log(error);
            }
            else {
                if (receipt.status == 1) {
                    $("#newProductId").val("");
                    $("#newProductName").val("");
                    $("#newManu").val("");
                    $("#newEx").val("");
                    $("#newCompanyName").val();
                    $("#newtitle").val("");
                    $("#newtrans").val("");
                    that.loadProductRegistration();
                }
                else {
                    $("#message").text("Registration Failed");
                }
            }
        }

    )
}

// Transfer function
Pharmaceutical.prototype.transferProduct = function () {
    // get input values for address and amount
    var txfProductId = $("#txfProductId").val();
    var txfProductName = $("#txfProductName").val();
    var txfManu = Date.parse($("#txfManu").val()) / 1000;   // Convert to Unix timestamp
    var txfEx = Date.parse($("#txfEx").val()) / 1000;       // Convert to Unix timestamp
    var Manu = formatDate(txfManu);
    var Ex = formatDate(txfManu);   
    var txfCompanyName = $("#txfCompanyName").val();
    var txftitle = $("#txftitle").val();
    var txftrans = Date.parse($("#txftrans").val()) / 1000; // Convert to Unix timestamp
    var trans = formatDate(txftrans);
    var txfAddress = $("#txfAddress").val();
    var txfAmount = $("#txfAmount").val();


    // Check if any of the required fields are empty
    if (
        txfProductId.trim() === '' ||
        txfProductName.trim() === '' ||
        isNaN(txfManu) ||
        isNaN(txfEx) ||
        txfCompanyName.trim() === '' ||
        txftitle.trim() === '' ||
        isNaN(txftrans) ||
        txfAddress.trim() === '' ||
        txfAmount.trim() === ''
    ) {
        alert("Please fill in all required fields.");
        return; // Exit the function early if any field is empty
    }

    // Check if txfProductId contains only numbers and is not less than 1
    if (!/^\d+$/.test(txfProductId) || parseInt(txfProductId) < 1) {
        alert("Product ID must be a positive integer.");
        return;
    }

    // Check if txfProductName contains only alphanumeric characters
    if (!/^[a-zA-Z0-9\s]+$/.test(txfProductName)) {
        alert("Product Name must contain only alphanumeric characters.");
        return;
    }

    // Check if txfCompanyName contains only alphanumeric characters
    if (!/^[a-zA-Z0-9\s]+$/.test(txfCompanyName)) {
        alert("Company Name must contain only alphaalphanumericbetic characters.");
        return;
    }

    // Check if txftitle contains only 
    if (!(txftitle === "Manufacturer" || txftitle === "Supplier")) {
        alert("Position / Title must be either 'Manufacturer' or 'Supplier'.");
        return;
    }

    // Check if txfAddress contains only alphanumeric characters
    if (!/^[a-zA-Z0-9]+$/.test(txfAddress)) {
        alert("Wallet Address must contain only alphanumeric characters.");
        return;
    }

    // Check if txfAmount contains only numbers
    if (!/^\d+$/.test(txfAmount) || parseInt(txfAmount) < 100) {
        alert("Amount must contain only numbers and at least 100.");
        return;
    }


    $("#message").text("Transfering " + txfProductId + ", " + txfProductName + " Date " + Manu + " - " + Ex + " to " + txfCompanyName + ", " + txftitle + " on " + trans);

    this.instance.transferProduct(txfProductId, txfProductName, txfManu, txfEx, txfCompanyName, txftitle, txftrans, txfAddress, txfAmount,
        // gas required to execure the transcation
        { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function () {
            if (error) {
                console.log(error);
            }
            else {
                if (receipt.status == 1) {
                    $("#txfProductId").val("");
                    $("#txfProductName").val("");
                    $("#txfManu").val("");
                    $("#txfEx").val("");
                    $("#txfCompanyName").val("");
                    $("#txftitle").val("");
                    $("#txftrans").val("");
                    $("#txfAddress").val("");
                    $("#txfAmount").val("");
                    that.loadProductRegistration();
                }
                else {
                    $("#message").text("Transfer Failed");
                }
            }
        })
}

/*
Pharmaceutical.prototype.retrieveProduct = function () {
    var that = this;
    this.getProductCount(function (error, productCount) {
        if (error) {
            console.log(error)
        }
        $("#productResult").empty(); //empty the house registration list table
        var productId = $("#reProductId").val();
        that.getProduct(productId, function (error, product) {
            if (error) {
                console.log(error)
            }
            var id = product[0];
            var name = product[1];
            var mdate = formatUnixTimestamp(product[2]);
            var edate = formatUnixTimestamp(product[3]);
            var company = product[4]; 
            var title = product[5]; 
            var transDate = formatUnixTimestamp(product[6]);
            var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + mdate + "</td><td>" + edate + "</td><td>" + company + "</td><td>" + title + "</td><td>" + transDate + "</td><td><button class='btn-red' id='button-delete' data-product-id='" + id + "'>Delete</button></td></tr >"
            $("#productResult").append(productTemplate);
            $("#rmessage").text("Product " + productId +" retrieved");
            
        });
        
    });
}*/
// Retrieve function
Pharmaceutical.prototype.retrieveProduct = function () {
    var that = this;
    this.getProductCount(function (error, productCount) {
        if (error) {
            console.log(error)
        }
        $("#productResult").empty(); //empty the product list table
        $("#rmessage").empty();
        
        var productId = $("#reProductId").val();
        if (productId <= productCount && productId > 0) { // Check if productId is valid
            that.getProduct(productId, function (error, product) {
                if (error) {
                    console.log(error)
                } else {
                    var id = product[0];
                    var name = product[1];
                    var mdate = formatUnixTimestamp(product[2]);
                    var edate = formatUnixTimestamp(product[3]);
                    var company = product[4];
                    var title = product[5];
                    var transDate = formatUnixTimestamp(product[6]);
                    var productTemplate = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + mdate + "</td><td>" + edate + "</td><td>" + company + "</td><td>" + title + "</td><td>" + transDate + "</td></tr >"
                    $("#productResult").append(productTemplate);
                    $("#rmessage").text("Product " + productId + " retrieved");
                    alert("Product " + productId + " retrieved");
                }
            });
        }
        else {
            alert('Enter a valid Product Id');
        }
    });
}


// Delete function
Pharmaceutical.prototype.deleteProduct = function () {
    var that = this; // Preserve the correct scope of 'this'

    // Assuming this.getProductCount retrieves the product count from the smart contract
    this.getProductCount(function (error, productCount) {
        if (error) {
            console.log(error);
            return; // Exit early if there's an error
        }

        var productId = $("#reProductId").val();

        // Use 'that' instead of 'this' inside the callback
        that.instance.deleteProduct(productId,
            // gas required to execute the transaction
            { from: that.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
            function (error, receipt) { // Include 'error' as a parameter
                if (error) {
                    console.log(error);
                } else {
                    if (receipt.status == 1) {
                        // Update UI after successful deletion
                        $("#productResult").empty(); // Clear product list
                        $("#rmessage").text("Product " + productId + " deleted");
                        // Assuming that.loadProductRegistration reloads the product list
                        that.loadProductRegistration();
                    } else {
                        $("#rmessage").text("Deleting");
                    }
                }
            }
        );
    });
};
/*Pharmaceutical.prototype.deleteProduct = function () {
    var that = this;
    // Assuming this.getProductCount retrieves the product count from the smart contract
    this.getProductCount(function (error, productCount) {
        if (error) {
            console.log(error);
        }
        var productId = $("#reProductId").val();
        this.instance.deleteProduct(productId,
            // gas required to execure the transcation
            { from: this.web3.eth.accounts[0], gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000},
            function(){
                if (error) {
                    console.log(error);
                } else {
                    if (receipt.status == 1) {
                        // Update UI after successful deletion
                        $("#productResult").empty(); // Clear product list
                        $("#rmessage").text("Product " + productId + " deleted");
                        // Assuming that.loadProductRegistration reloads the product list
                        that.loadProductRegistration();
                    } else {
                        $("#rmessage").text("Deletion Failed");
                    }
                }
            }
        );
    });
};*/


// Function to mint coins
Pharmaceutical.prototype.mintCoins = function (receiverAddress, amount, cb) {
    var senderAddress = this.web3.eth.accounts[0]; // Assuming the sender is the account executing the function

    
    this.instance.mintCoins(receiverAddress, amount,
        { from: senderAddress, gas: 1000000, gasPrice: 1000000000, gasLimit: 1000000 },
        function (error, result) {
            cb(error, result);
        }
    );
};

// Example usage:
$(document).on("click", "#button-mintcoins", function () {
    var receiverAddress = $("#mintReceiverAddress").val();
    var mintAmount = $("#mintAmount").val();
    if (receiverAddress === null || receiverAddress === "" || mintAmount === 0) {
        alert("Please enter your wallet address or a non-zero amount");
        $("#showbalance").text("Wallet Balance: " + balance.toNumber());
    }
    
    else{
        pharmaceutical.mintCoins(receiverAddress, mintAmount, function (error, result) {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log("Coins minted successfully. Transaction hash:", result);
                alert(mintAmount + " Coins minted successfully")
    
    
            }
        });
    }
});

Pharmaceutical.prototype.getBalance = function (address, cb) {
    this.instance.balances(address, function (error, result) {
        cb(error, result);
    })
}

Pharmaceutical.prototype.showAddressBalance = function (hash, cb) {
    var address = $('#walletAddress').val();

    this.getBalance(address, function (error, balance) {
        if (error) {
            console.log(error)
        }
        if(address === ""){
            alert("Please enter your wallet address")
            $("#showbalance").text("Wallet Balance: " + balance.toNumber());
        }
        alert("Balance Retrieved")
        $("#showbalance").text("Wallet Balance: " + balance.toNumber());
        
    })
}

