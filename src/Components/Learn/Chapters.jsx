import React from "react";
import "./Chapters.scss";

function ChapterCard({ title, smalldesc, desc }) {
  return (
    <section className="ChapterContainer">
      <div className="ChapterCard">
        <div className="Chaptercontent">
          <p className="Chapterlogo">{title}</p>
          <div className="Chapterh6">{smalldesc}</div>
          <div className="hover_Chaptercontent">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterAIML() {
  // Define data arrays for each unit
  const unit1Data = [
    {
      title: "Chapter 1.1",
      smalldesc: "AI concept, history",
      desc: "This review covers tree/graph structures, state space representation, search (uninformed: DFS, BFS, informed: Heuristics, A*, AO*) and their applications in Natural Language Processing.",
    },
    {
      title: "Chapter 1.2",
      smalldesc: "Introduction To ML",
      desc: "Machine Learning introduction, scope, limitations, ML models (regression), math essentials (probability, statistics, linear algebra), optimization (convex), data visualization, hypothesis testing, data distributions, preprocessing, augmentation, and data normalization.",
    },
  ];

  const unit2Data = [
    {
      title: "Chapter 2.1",
      smalldesc: "Linear Regression",
      desc: "Linear regression, multiple regression, bias-variance trade-off, model validation methods, and algorithm performance evaluation metrics including accuracy, confusion matrix, error rate, precision, recall, specificity, mean squared error, and root mean squared error.",
    },
    {
      title: "Chapter 2.2",
      smalldesc: "Logistic Regression",
      desc: "Logistic Regression, Support Vector Machine (SVM), Naive Bayesian Classifier, K-Nearest Neighbor (KNN), and Decision Tree: Picking the best splitting attribute, over fitting and under fitting, noisy data and pruning. Ensemble Methods: Random Forest ",
    },
  ];

  const unit3Data = [
    {
      title: "Chapter 3.1",
      smalldesc: "Unsupervised Learning",
      desc: "This covers clustering methods (K-means, K-medioids, hierarchical clustering), evaluation of clustering, Principal Component Analysis (Eigenvalues, Eigenvectors, Orthogonality), association rules (Apriori algorithm, Support, Confidence, Lift, Leverage), and feature/dimensionality reduction techniques.",
    },
    {
      title: "Chapter 3.2",
      smalldesc: "Semi-Supervised Learning",
      desc: "Introduction, Assumptions, Working and Real-World Applications. Reinforcement Learning: Introduction, Applications and Examples, Challenges of applying reinforcement learning, Elements of Reinforcement Learning, reinforcement learning algorithms",
    },
  ];

  return (
    <div className="ChapterPart">
      <h1 style={{ textAlign: "center" }}>
        Artificial Intelligence & Machine Learning
      </h1>
      <div className="seperator"></div>

      {/* Unit I */}
      <h3 style={{ textAlign: "center" }}>UNIT - I</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart1">
        {unit1Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit II */}
      <h3 style={{ textAlign: "center" }}>UNIT - II</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart2">
        {unit2Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit III */}
      <h3 style={{ textAlign: "center" }}>UNIT - III</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart3">
        {unit3Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChapterOS() {
  // Define data arrays for each unit
  const unit1Data = [
    {
      title: "Chapter 1.1",
      smalldesc: "Introduction to the Operating System",
      desc: "Introduction to Operating Systems, Operating System Structure, Main Functions and characteristics of Operating Systems, Types of Operating Systems, System calls, Types of system calls, System programs",
    },
    {
      title: "Chapter 1.2",
      smalldesc: "Process Management",
      desc: "Process Concept, Process Control Block, Process Scheduling, Threads, CPU Scheduling : Preemptive/ Non Preemptive Scheduling, Scheduling Criteria, Scheduling Algorithms, inter-process communication, remote procedure calls, Process Synchronization",
    },
    {
      title: "Chapter 1.3",
      smalldesc: "Deadlocks",
      desc: "Deadlock characterization and conditions for deadlock, deadlock prevention, Deadlock avoidance-safe state, resource allocation graph algorithm, Banker’s algorithms-Safety algorithm, Deadlock detection, Recovery from deadlock.",
    },
  ];

  const unit2Data = [
    {
      title: "Chapter 2.1",
      smalldesc: "Memory Management",
      desc: "Address binding, logical versus physical address space, dynamic loading, Swapping, contiguous memory allocation, Fragmentation, Paging, Segmentation, Segmentation with Paging, Virtual Memory Concept, Demand Paging, Page Replacement, Page Replacement Algorithms",
    },
    {
      title: "Chapter 2.2",
      smalldesc: "Device Management",
      desc: "Disk Structure, Disk formatting, Disk Scheduling Algorithms, RAID structure-RAID levels, problems with RAID. ",
    },
    {
      title: "Chapter 2.3",
      smalldesc: "File Management",
      desc: "File Concepts, Access Methods, Directory Structure, Allocation Methods, Free Space Management",
    },
  ];

  const unit3Data = [
    {
      title: "Chapter 3.1",
      smalldesc: "System Protection and Security",
      desc: "Goals, principles and domain of protection, Access matrix, implementation of access matrix, the security problem, program threats, system and network threats.",
    },
    {
      title: "Chapter 3.2",
      smalldesc: "Distributed and Network Operating Systems",
      desc: "Overview: Topology, connection strategy, network operating system types: Peer to Peer & Client server, Distributed message passing.",
    },
  ];

  return (
    <div className="ChapterPart">
      <h1 style={{ textAlign: "center" }}>Operating Systems</h1>
      <div className="seperator"></div>

      {/* Unit I */}
      <h3 style={{ textAlign: "center" }}>UNIT - I</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart1">
        {unit1Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit II */}
      <h3 style={{ textAlign: "center" }}>UNIT - II</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart2">
        {unit2Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit III */}
      <h3 style={{ textAlign: "center" }}>UNIT - III</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart3">
        {unit3Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChapterDAA() {
  // Define data arrays for each unit
  const unit1Data = [
    {
      title: "Chapter 1.1",
      smalldesc: "Algorithms and Program Performance",
      desc: "Designing and analyzing algorithms, Time and Space complexity, Average and worst case Analysis, Asymptotic notations, recurrence equations and their solution: substitution method, recursion-tree method, master method.",
    },
    {
      title: "Chapter 1.2",
      smalldesc: "Review of Data Structures",
      desc: "Arrays, Stacks, Queues, Pointers, Linked Lists (One –way, Two-way and circular Two-way), Hashing, Trees (BST, B Tree, balanced trees (AVL, Red black trees), Heaps, Graphs",
    },
    {
      title: "Chapter 1.3",
      smalldesc: "Sorting algorithms",
      desc: "Sorting in linear time: counting sort, radix sort, bucket sort",
    },
  ];

  const unit2Data = [
    {
      title: "Chapter 2.1",
      smalldesc: "Divide and conquer & Greedy algorithms",
      desc: "Divide and conquer: The General method, Binary search, Finding maximum and minimum of a sequence of numbers, 2 way Merge sort, Quick sort, Selection sort, Strassen’s matrix multiplication.Greedy algorithms: The general method, Fractional Knapsack problem, Minimum cost spanning tree: Prim’s Algorithm, Kruskal Algorithm; Huffman coding, Optimal merge patterns",
    },
    {
      title: "Chapter 2.2",
      smalldesc: "Dynamic programming",
      desc: "The general method, 0/1 knapsack, Subset Sum problem, Change making problem, optimal binary search tree, Matrix-chain Multiplication, Longest common Subsequence Problem, Travelling salesman problem. Comparison of Divide & Conquer and Dynamic Programming techniques.",
    },
    {
      title: "Chapter 2.3",
      smalldesc: "Backtracking &Branch and Bound",
      desc: "Backtracking: The general method, N-queen’s problem, sum-of-subsets, Hamiltonian cycles.Branch and Bound: Branch and Bound method, 0/1 Knapsack problem, Travelling salesperson problem.",
    },
  ];

  const unit3Data = [
    {
      title: "Chapter 3.1",
      smalldesc: "Graph Algorithms",
      desc: "This covers clustering methods (K-means, K-medioids, hierarchical clustering), evaluation of clustering, Principal Component Analysis (Eigenvalues, Eigenvectors, Orthogonality), association rules (Apriori algorithm, Support, Confidence, Lift, Leverage), and feature/dimensionality reduction techniques.",
    },
    {
      title: "Chapter 3.2",
      smalldesc: "Computational complexity",
      desc: "Basic concepts, P and NP-classes, proof of NP-hard and NP-completeness",
    },
    {
      title: "Chapter 3.3",
      smalldesc: "Miscellaneous topics",
      desc: "Euclid Algorithm for GCD of 2 numbers, modulo arithmetic, Chinese remainder theorem, string manipulation/matching algorithms: Rabin Karp algorithm, KMP (Knuth-Morris-Pratt) algorithm, Boyer-Moore algorithm; Convex Hull",
    },
  ];

  return (
    <div className="ChapterPart">
      <h1 style={{ textAlign: "center" }}>Design & Analysis of Algorithms</h1>
      <div className="seperator"></div>

      {/* Unit I */}
      <h3 style={{ textAlign: "center" }}>UNIT - I</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart1">
        {unit1Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit II */}
      <h3 style={{ textAlign: "center" }}>UNIT - II</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart2">
        {unit2Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>

      {/* Unit III */}
      <h3 style={{ textAlign: "center" }}>UNIT - III</h3>
      <div className="seperator"></div>
      <div className="Chapterunit ChapterPart3">
        {unit3Data.map((course, index) => {
          return (
            <div key={index}>
              <ChapterCard
                title={course.title}
                smalldesc={course.smalldesc}
                desc={course.desc}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ChapterAIML, ChapterOS, ChapterDAA };
