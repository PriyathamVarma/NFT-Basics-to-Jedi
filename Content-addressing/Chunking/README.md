# Chunking

> In chunking, the data is divided into small portions called "chunks". these chunks are individually addressed and identified by its own hash. 
> This helps in transferring piece-wise
> Fetching the parts that are needed --> Random Access


## Linking Chunks in merkle DAGs

### Merkle DAGs(MErkle Directed Acyclic Graph)

![Merkle Trees](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/Hash_Tree.svg.png)

In cryptography and computer science, a hash tree or [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) is a tree in which every "leaf" (node) is labelled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labelled with the cryptographic hash of the labels of its child nodes. A hash tree allows efficient and secure verification of the contents of a large data structure. A hash tree is a generalization of a hash list and a hash chain.


![Merkle DAGs](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/merkleDAGs.png)

[Merkle DAGs](https://docs.ipfs.tech/concepts/merkle-dag/) is a DAG where each node has an identifier, and this is the result of hashing the node's contents — any opaque payload carried by the node and the list of identifiers of its children — using a cryptographic hash function like SHA256. This brings some important considerations:

Merkle DAGs can only be constructed from the leaves, that is, from nodes without children. Parents are added after children because the children's identifiers must be computed in advance to be able to link them.
Every node in a Merkle DAG is the root of a (sub)Merkle DAG itself, and this subgraph is contained in the parent DAG.
Merkle DAG nodes are immutable. Any change in a node would alter its identifier and thus affect all the ascendants in the DAG, essentially creating a different DAG.

![mekle dags chunks](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/content_addressing_IPFS.drawio.png)

> Merkle Trees children nodes cant have more tha one parent node. 
> Each node in the DAG is addressed and can be accessed indpendently.



# IMPORTANT RESOURCES

- [About Cryptography](https://proto.school/merkle-dags/01)
