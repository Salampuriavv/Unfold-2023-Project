  import { PushAPI } from '@pushprotocol/restapi';
  import { createSocketConnection, EVENTS } from '@pushprotocol/socket';
  import { ethers } from 'ethers';
  import{function1} from 'function1';
  // decider object - 'any' since either condition should allow access
  // userAlice.chat.group.create(name, {options?})
const createdGroup = await userAlice.chat.group.create(Authoritygrp,{rules : [
  {
    "type": "PUSH", // define type that rules engine should go for
    "category": "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
    "subcategory": "holder", // define if you are checking 'holder' or 'owner'
    "data": { 
      "contract": "eip155:43113:0xad317fbA3a2eE82aA5835fe065913d5c6B739E99", // $PUSH address on ETH
      "comparison": ">=", // what comparison needs to pass
      "amount": 100, // amount that needs to passed
      "decimals": 18, // the decimals for the token
    }
  },
  {
    "type": "PUSH", // define type that rules engine should go for
    "category": "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
    "subcategory": "holder", // define if you are checking 'holder' or 'owner'
    "data": { 
      "contract": "eip155:43113:0xad317fbA3a2eE82aA5835fe065913d5c6B739E99", // $PUSH address on ETH
      "comparison": ">=", // what comparison needs to pass
      "amount": 100, // amount that needs to passed
      "decimals": 18, // the decimals for the token
    }
  }
] }); 

 [
  {
    "type": "PUSH", // define type that rules engine should go for
    "category": "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
    "subcategory": "holder", // define if you are checking 'holder' or 'owner'
    "data": { 
      "contract": "eip155:43113:0xad317fbA3a2eE82aA5835fe065913d5c6B739E99", // $PUSH address on ETH
      "comparison": ">=", // what comparison needs to pass
      "amount": 100, // amount that needs to passed
      "decimals": 18, // the decimals for the token
    }
  },
  {
    "type": "PUSH", // define type that rules engine should go for
    "category": "ERC20", // define it's ERC20 token that you want to check, supports ERC721 as well
    "subcategory": "holder", // define if you are checking 'holder' or 'owner'
    "data": { 
      "contract": "eip155:43113:0xad317fbA3a2eE82aA5835fe065913d5c6B739E99", // $PUSH address on ETH
      "comparison": ">=", // what comparison needs to pass
      "amount": 100, // amount that needs to passed
      "decimals": 18, // the decimals for the token
    }
  }
]