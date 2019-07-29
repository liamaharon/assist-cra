const address = '0x9e7ae8c4d07670df36fdb88c1b3ae06dc4625fa0';

const abi = [
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'votes',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_sender', type: 'address' },
      { indexed: false, name: '_recipient', type: 'address' }
    ],
    name: 'HighFive',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: '_voter', type: 'address' },
      { indexed: false, name: '_recipient', type: 'address' },
      { indexed: false, name: '_voteTotal', type: 'uint256' }
    ],
    name: 'VoteUp',
    type: 'event'
  },
  {
    constant: false,
    inputs: [],
    name: 'failHard',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'failOOG',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [],
    name: 'failHalf',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_recipient', type: 'address' }],
    name: 'highFive',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: false,
    inputs: [{ name: '_recipient', type: 'address' }],
    name: 'voteUp',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export default {
  address,
  abi
};
