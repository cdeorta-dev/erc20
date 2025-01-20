const expect = require('chai').expect;
const erc20 = artifacts.require("MyToken");

contract("ERC20",accounts =>{
    [owner,eoa1,eoa2]= accounts;
    var erc20Inst;

    before(async function(){
        erc20Inst = await erc20.new();
    });

    context("Constructor", async() =>{
        it("Verifico Nombre verdadero", async()=>{
            const _name = await erc20Inst.name();
            expect(_name).to.equal("EducationIT");
        });
        it("Verifico symbol verdadero", async()=>{
            const _symbol = await erc20Inst.symbol();
            expect(_symbol).to.equal("EDIT");
        });
        it("Verifico que tenga 6  decimales", async()=>{
            const _decimals = await erc20Inst.decimals();
            expect(_decimals.toString()).to.equal("6");
        });
    });
});