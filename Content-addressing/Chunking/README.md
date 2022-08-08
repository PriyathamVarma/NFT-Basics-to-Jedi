# Chunking

> In chunking, the data is divided into small portions called "chunks". these chunks are individually addressed and identified by its own hash. 
> This helps in transferring piece-wise
> Fetching the parts that are needed --> Random Access


## Linking Chunks in merkle DAGs

### Merkle DAGs(MErkle Directed Acyclic Graph)

![Merkle Trees](https://github.com/PriyathamVarma/Basic_NFT/blob/main/Diagrams/Hash_Tree.svg.png)

In cryptography and computer science, a hash tree or [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) is a tree in which every "leaf" (node) is labelled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labelled with the cryptographic hash of the labels of its child nodes. A hash tree allows efficient and secure verification of the contents of a large data structure. A hash tree is a generalization of a hash list and a hash chain.
