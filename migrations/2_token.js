var token = artifacts.require("MyToken");

module.exports = async function(deployer){
   await deployer.deploy(token);
    // si este deployer tiene parametros se lo ponemos dentro de deploy separado con ,
}