// Tower naming reference:
// Small: Small Boy76, Small Cage79, Tall Cage82
// Medium: M-85, M-88, M-91
// Tall: T-94, T-97, T-100, T-103

// Setup types:
// - Hybrid: bed facing north/south axis
// - Modern: bed facing east/west axis
// - Multiblock: beds on both axes (3 obby)
// - "Multiblock Adjusted" = standing diagonal to two bed positions (3 obby)

// Bed break chances for "Other Heights":
// y82 ~10%, y87 ~25%, y91 ~10%, y100 <5%

const topSetup = [
  {
    name: "Small Boy", h: 76, category: "small",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        front: {
          81: [{ xz: "28, -26" }, { xz: "28, -27" }],
          86: [{ xz: "28, -26" }, { xz: "28, -27" }],
          90: [{ xz: "28, -26" }, { xz: "28, -27" }],
          95: [{ xz: "28, -26" }, { xz: "28, -27" }],
          99: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          82: [{ xz: "28, -28" }, { xz: "28, -29", note: "~10% bed break" }],
          87: [{ xz: "28, -28" }, { xz: "28, -29", note: "~25% bed break" }],
          91: [{ xz: "28, -28" }, { xz: "28, -29", note: "~10% bed break" }],
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }]
        },
        back: {
          81: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          86: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          90: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          95: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          82: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~10% bed break" }],
          87: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~25% bed break" }],
          91: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~10% bed break" }]
        }
      }
    ]
  },
  {
    name: "Small Cage", h: 79, category: "small",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        front: {
          86: [{ xz: "28, -26" }, { xz: "28, -27" }],
          90: [{ xz: "28, -26" }, { xz: "28, -27" }],
          95: [{ xz: "28, -26" }, { xz: "28, -27" }],
          99: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          87: [{ xz: "28, -28" }, { xz: "28, -29", note: "~25% bed break" }],
          91: [{ xz: "28, -28" }, { xz: "28, -29", note: "~10% bed break" }],
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }]
        },
        back: {
          86: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          90: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          95: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          99: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          87: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~25% bed break" }],
          91: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~10% bed break" }],
          100: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "<5% bed break" }]
        }
      }
    ]
  },
  {
    name: "Tall Cage", h: 82, category: "small",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          90: [{ xz: "28, -26" }, { xz: "28, -27" }],
          95: [{ xz: "28, -26" }, { xz: "28, -27" }],
          99: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          87: [{ xz: "28, -26" }, { xz: "28, -27", note: "~25% bed break" }],
          91: [{ xz: "28, -28" }, { xz: "28, -29", note: "~10% bed break" }],
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }],
          104: [{ xz: "28, -28" }, { xz: "28, -29" }]
        },
        back: {
          90: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          95: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          99: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          87: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~25% bed break" }],
          91: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~10% bed break" }],
          100: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "<5% bed break" }]
        }
      },
      {
        id: "y86-hybrid",
        label: "Y86 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -27" }, { xz: "27, -26" }, { xz: "28, -29" }, { xz: "27, -28" }]
        },
        back: {
          86: [{ xz: "-29, 26" }, { xz: "-29, 28" }]
        }
      }
    ]
  },
  {
    name: "M-85", h: 85, category: "medium",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          90: [{ xz: "28, -26" }, { xz: "28, -27" }],
          95: [{ xz: "28, -26" }, { xz: "28, -27" }],
          99: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          91: [{ xz: "28, -28" }, { xz: "28, -29", note: "~10% bed break" }],
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }],
          104: [{ xz: "28, -28" }, { xz: "28, -29" }]
        },
        back: {
          90: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          95: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          99: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          91: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "~10% bed break" }],
          100: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "<5% bed break" }]
        }
      },
      {
        id: "y86-hybrid",
        label: "Y86 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          86: [{ xz: "27, -29" }, { xz: "27, -31" }]
        },
        back: {
          86: [{ xz: "-29, 28", note: "Multiblock Adjusted" }, { xz: "-28, 30" }, { xz: "-27, 29" }]
        }
      }
    ]
  },
  {
    name: "M-88", h: 88, category: "medium",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          95: [{ xz: "28, -26" }, { xz: "28, -27" }],
          99: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }],
          104: [{ xz: "28, -28" }, { xz: "28, -29" }]
        },
        back: {
          95: [{ xz: "-30, 25" }, { xz: "-30, 27" }],
          99: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          100: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "<5% bed break" }]
        }
      },
      {
        id: "y91-hybrid",
        label: "Y91 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          91: [{ xz: "27, -27" }, { xz: "27, -29" }]
        },
        back: {
          91: [{ xz: "-28, 26" }, { xz: "-28, 28" }]
        }
      },
      {
        id: "y90-modern",
        label: "Y90 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "29, -29", note: "Multiblock Adjusted" }, { xz: "27, -30" }, { xz: "28, -31" }]
        },
        back: {
          90: [{ xz: "-30, 28", note: "Multiblock Adjusted" }, { xz: "-28, 29" }, { xz: "-29, 30" }]
        }
      },
      {
        id: "y90-hybrid",
        label: "Y90 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          90: [{ xz: "27, -28" }, { xz: "27, -30" }]
        },
        back: {
          90: [{ xz: "-28, 27" }, { xz: "-28, 29" }]
        }
      },
      {
        id: "y86-modern",
        label: "Y86 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y86-side",
        label: "Y86 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }, { xz: "-30, 31" }]
        }
      },
      {
        id: "y90-side",
        label: "Y90 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "29, -29", note: "MultiBlock" }, { xz: "29, -30" }]
        },
        back: {
          90: [{ xz: "-30, 28", note: "MultiBlock" }, { xz: "-30, 29" }]
        }
      }
    ]
  },
  {
    name: "M-91", h: 91, category: "medium",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          99: [{ xz: "28, -26" }, { xz: "28, -27" }],
          104: [{ xz: "28, -26" }, { xz: "28, -27" }]
        },
        frontOther: {
          100: [{ xz: "28, -28" }, { xz: "28, -29", note: "<5% bed break" }]
        },
        back: {
          99: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        },
        backOther: {
          100: [{ xz: "-30, 25" }, { xz: "-30, 27", note: "<5% bed break" }],
          104: [{ xz: "-30, 25" }, { xz: "-30, 27" }]
        }
      },
      {
        id: "y95-hybrid",
        label: "Y95 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          95: [{ xz: "28, -27" }, { xz: "27, -26" }, { xz: "28, -29" }, { xz: "27, -28" }]
        },
        back: {
          95: [{ xz: "-29, 26" }, { xz: "-29, 28" }]
        }
      },
      {
        id: "y91-modern",
        label: "Y91 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          91: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          91: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y91-hybrid",
        label: "Y91 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          91: [{ xz: "25, -27" }, { xz: "25, -29" }]
        },
        back: {
          91: [{ xz: "-26, 26" }, { xz: "-26, 28" }]
        }
      },
      {
        id: "y90-modern",
        label: "Y90 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y86-modern",
        label: "Y86 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y86-side",
        label: "Y86 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }, { xz: "29, -32" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }]
        }
      },
      {
        id: "y90-side",
        label: "Y90 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "MultiBlock" }, { xz: "-29, 30" }]
        }
      }
    ]
  },
  {
    name: "T-94", h: 94, category: "tall",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          99: [{ xz: "28, -26" }, { xz: "28, -27" }, { xz: "27, -26" }],
          104: [{ xz: "28, -26" }, { xz: "28, -27" }, { xz: "27, -26" }]
        },
        frontOther: {
          100: [{ xz: "28, -28" }, { xz: "28, -29" }, { xz: "27, -28", note: "<5% bed break" }]
        },
        back: {
          99: [{ xz: "-30, 25" }, { xz: "-29, 25" }, { xz: "-30, 27" }, { xz: "-29, 27" }]
        },
        backOther: {
          100: [{ xz: "-30, 25" }, { xz: "-29, 25" }, { xz: "-30, 27" }, { xz: "-29, 27", note: "<5% bed break" }],
          104: [{ xz: "-30, 25" }, { xz: "-29, 25" }, { xz: "-30, 27" }, { xz: "-29, 27" }]
        }
      },
      {
        id: "y95-modern",
        label: "Y95 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          95: [{ xz: "28, -29" }, { xz: "26, -30" }, { xz: "27, -31" }]
        },
        back: {
          95: [{ xz: "-30, 29" }, { xz: "-28, 30" }, { xz: "-30, 31", t: "db" }]
        }
      },
      {
        id: "y95-hybrid",
        label: "Y95 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          95: [{ xz: "26, -28" }, { xz: "26, -30" }]
        },
        back: {
          95: [{ xz: "-27, 27" }, { xz: "-27, 29" }]
        }
      },
      {
        id: "y90-modern",
        label: "Y90 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y86-modern",
        label: "Y86 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y86-side",
        label: "Y86 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }, { xz: "29, -32" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }]
        }
      },
      {
        id: "y90-side",
        label: "Y90 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "MultiBlock" }, { xz: "-29, 30" }]
        }
      }
    ]
  },
  {
    name: "T-97", h: 97, category: "tall",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          104: [{ xz: "28, -26" }, { xz: "27, -26" }, { xz: "28, -28" }, { xz: "27, -28" }]
        },
        back: {
          104: [{ xz: "-30, 25" }, { xz: "-29, 25" }, { xz: "-30, 27" }, { xz: "-29, 27" }]
        }
      },
      {
        id: "y100-hybrid",
        label: "Y100 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          100: [{ xz: "27, -27" }, { xz: "27, -29" }]
        },
        back: {
          100: [{ xz: "-28, 26" }, { xz: "-28, 28" }]
        }
      },
      {
        id: "y99-modern",
        label: "Y99 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          99: [{ xz: "29, -29", note: "Multiblock Adjusted" }, { xz: "27, -30" }, { xz: "28, -31" }]
        },
        back: {
          99: [{ xz: "-30, 28", note: "Multiblock Adjusted" }, { xz: "-28, 29" }, { xz: "-29, 30" }]
        }
      },
      {
        id: "y99-hybrid",
        label: "Y99 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          99: [{ xz: "26, -27" }, { xz: "26, -29" }]
        },
        back: {
          99: [{ xz: "-27, 26" }, { xz: "-27, 28" }]
        }
      },
      {
        id: "y99-hybrid-mb",
        label: "Y99 Hybrid Multiblock",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          99: [{ xz: "28, -28", note: "Multiblock Adjusted" }, { xz: "27, -30" }, { xz: "26, -29" }]
        },
        back: {
          99: [{ xz: "-29, 27", note: "Multiblock Adjusted" }, { xz: "-28, 29" }, { xz: "-27, 28" }]
        }
      },
      {
        id: "y90-modern",
        label: "Y90 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y86-modern",
        label: "Y86 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y95-side",
        label: "Y95 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          95: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          95: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y90-side",
        label: "Y90 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "MultiBlock" }]
        }
      },
      {
        id: "y86-side",
        label: "Y86 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }]
        },
        back: {
          86: [{ xz: "29, -31", note: "MultiBlock" }]
        }
      }
    ]
  },
  {
    name: "T-100", h: 100, category: "tall",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          104: [{ xz: "27, -26" }, { xz: "27, -28" }]
        },
        back: {
          104: [{ xz: "-29, 26" }, { xz: "-28, 25" }, { xz: "-29, 28" }, { xz: "-28, 27" }]
        }
      },
      {
        id: "y100-modern",
        label: "Y100 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          100: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          100: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y100-hybrid",
        label: "Y100 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          100: [{ xz: "25, -27" }, { xz: "25, -29" }]
        },
        back: {
          100: [{ xz: "-27, 26", note: "Multiblock Adjusted" }, { xz: "-26, 28" }, { xz: "-25, 27" }]
        }
      },
      {
        id: "y90-modern",
        label: "Y90 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y86-modern",
        label: "Y86 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y99-side-modern",
        label: "Y99 Side Modern",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          99: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          99: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y99-side-hybrid",
        label: "Y99 Side Hybrid",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          99: [{ xz: "26, -28", note: "Multiblock Adjusted" }, { xz: "25, -30" }, { xz: "24, -29" }]
        },
        back: {
          99: [{ xz: "-27, 27", note: "Multiblock Adjusted" }, { xz: "-26, 29" }, { xz: "-25, 28" }]
        }
      },
      {
        id: "y95-side",
        label: "Y95 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          95: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          95: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y90-side",
        label: "Y90 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          90: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          90: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y86-side",
        label: "Y86 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          86: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      }
    ]
  },
  {
    name: "T-103", h: 103, category: "tall", altName: "Tall Boy",
    setups: [
      {
        id: "non-offset",
        label: "Non Offset",
        setupType: "Hybrid (Leftside Obby)",
        front: {
          108: [{ xz: "28, -26" }, { xz: "28, -28" }]
        },
        back: {}
      },
      {
        id: "y104-modern",
        label: "Y104 Modern Offset",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          104: [{ xz: "29, -30" }, { xz: "27, -31" }, { xz: "28, -32" }]
        },
        back: {
          104: [{ xz: "-30, 29" }, { xz: "-28, 30" }, { xz: "-30, 31", t: "db" }]
        }
      },
      {
        id: "y104-hybrid",
        label: "Y104 Hybrid Offset",
        setupType: "Hybrid Offset (Leftside Obby)",
        front: {
          104: [{ xz: "25, -26" }, { xz: "25, -28" }]
        },
        back: {
          104: [{ xz: "-26, 25" }, { xz: "-26, 27" }]
        }
      },
      {
        id: "y104-hybrid-mb",
        label: "Y104 Hybrid Multiblock",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          104: [{ xz: "27, -28" }, { xz: "26, -30" }, { xz: "25, -29" }]
        },
        back: {
          104: [{ xz: "-28, 27" }, { xz: "-27, 29" }, { xz: "-26, 28" }]
        }
      }
    ],
    sideSetups: [
      {
        id: "y99-side-modern",
        label: "Y99 Side Modern",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          99: [{ xz: "28, -30", note: "Multiblock Adjusted" }, { xz: "26, -31" }, { xz: "27, -32" }]
        },
        back: {
          99: [{ xz: "-29, 29", note: "Multiblock Adjusted" }, { xz: "-27, 30" }, { xz: "-28, 31" }]
        }
      },
      {
        id: "y99-side-hybrid",
        label: "Y99 Side Hybrid",
        setupType: "Hybrid Offset (Leftside Obby when Multiblockless)",
        front: {
          99: [{ xz: "26, -28", note: "Multiblock Adjusted" }, { xz: "25, -30" }, { xz: "24, -29" }]
        },
        back: {
          99: [{ xz: "-27, 27", note: "Multiblock Adjusted" }, { xz: "-26, 29" }, { xz: "-25, 28" }]
        }
      },
      {
        id: "y94-side",
        label: "Y94 Side",
        setupType: "Modern Offset (Rightside Obby when Multiblockless)",
        front: {
          86: [{ xz: "29, -29" }, { xz: "27, -30" }, { xz: "28, -31" }],
          90: [{ xz: "29, -29" }, { xz: "27, -30" }, { xz: "28, -31" }],
          94: [{ xz: "29, -29" }, { xz: "27, -30" }, { xz: "28, -31" }]
        },
        back: {
          86: [{ xz: "-30, 28" }, { xz: "-28, 29" }, { xz: "-29, 30" }],
          90: [{ xz: "-30, 28" }, { xz: "-28, 29" }, { xz: "-29, 30" }],
          94: [{ xz: "-30, 28" }, { xz: "-28, 29" }, { xz: "-29, 30" }]
        }
      }
    ]
  },
  {
    name: "1/8", h: null, category: "special",
    setups: [
      {
        id: "default",
        label: "Triple Staircase",
        setupType: "Leftside and Rightside Obby are both fine",
        front: {
          78: [{ xz: "23, 0" }, { xz: "21, 0" }],
          83: [{ xz: "23, 0" }, { xz: "21, 0" }],
          87: [{ xz: "23, 0" }, { xz: "21, 0" }],
          92: [{ xz: "23, 0" }, { xz: "21, 0" }],
          96: [{ xz: "23, 0" }, { xz: "21, 0" }],
          101: [{ xz: "23, 0" }, { xz: "21, 0" }]
        },
        frontOther: {
          105: [{ xz: "23, 0" }, { xz: "21, 0" }]
        },
        back: {
          78: [{ xz: "-23, 0" }, { xz: "-21, 0" }],
          83: [{ xz: "-23, 0" }, { xz: "-21, 0" }],
          87: [{ xz: "-23, 0" }, { xz: "-21, 0" }],
          92: [{ xz: "-23, 0" }, { xz: "-21, 0" }],
          96: [{ xz: "-23, 0" }, { xz: "-21, 0" }],
          101: [{ xz: "-23, 0" }, { xz: "-21, 0" }]
        }
      }
    ]
  }
];

const sideSetup = [
  {
    name: "M-85", h: 85, category: "medium",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          86: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }]
        },
        back: {
          86: [{ xz: "-30, 29", note: "MultiBlock" }, { xz: "-30, 30" }]
        }
      }
    ]
  },
  {
    name: "M-88", h: 88, category: "medium",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          86: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }],
          90: [{ xz: "29, -29", note: "MultiBlock" }, { xz: "29, -30" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }, { xz: "-30, 31" }],
          90: [{ xz: "-30, 28", note: "MultiBlock" }, { xz: "-30, 29" }]
        }
      }
    ]
  },
  {
    name: "M-91", h: 91, category: "medium",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }, { xz: "29, -32" }],
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }],
          95: [{ xz: "29, -29", note: "MultiBlock" }, { xz: "29, -30" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }],
          90: [{ xz: "-29, 29", note: "MultiBlock" }, { xz: "-29, 30" }],
          95: [{ xz: "-30, 28", note: "MultiBlock" }, { xz: "-29, 29" }]
        }
      }
    ]
  },
  {
    name: "T-94", h: 94, category: "tall",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }, { xz: "29, -32" }],
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }],
          95: [{ xz: "29, -30", note: "MultiBlock" }, { xz: "29, -31" }]
        },
        back: {
          86: [{ xz: "-30, 30", note: "MultiBlock" }],
          90: [{ xz: "-29, 29", note: "MultiBlock" }, { xz: "-29, 30" }],
          95: [{ xz: "-29, 28", note: "MultiBlock" }, { xz: "-29, 29" }]
        }
      }
    ]
  },
  {
    name: "T-97", h: 97, category: "tall",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          86: [{ xz: "29, -31", note: "MultiBlock" }],
          90: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }],
          95: [{ xz: "28, -30", note: "MultiBlock" }, { xz: "28, -31" }],
          99: [{ xz: "29, -30", note: "MultiBlock" }, { xz: "29, -31" }]
        },
        back: {
          86: [{ xz: "29, -31", note: "MultiBlock" }],
          90: [{ xz: "-29, 29", note: "MultiBlock" }],
          95: [{ xz: "-29, 29", note: "MultiBlock" }],
          99: [{ xz: "-30, 29", note: "On CCW place bed extender" }]
        }
      }
    ]
  },
  {
    name: "T-100", h: 100, category: "tall",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          89: [{ xz: "30, -28", note: "MultiBlock" }],
          95: [{ xz: "28, -30", note: "MultiBlock" }],
          99: [{ xz: "28, -30", note: "On CCW place bed extender" }]
        },
        back: {
          89: [{ xz: "-31, 27", note: "MultiBlock" }],
          95: [{ xz: "-29, 29", note: "MultiBlock" }],
          99: [{ xz: "-29, 29", note: "MultiBlock" }]
        }
      }
    ]
  },
  {
    name: "T-103", h: 103, category: "tall", altName: "Tall Boy",
    setups: [
      {
        id: "default",
        label: "Default",
        front: {
          89: [{ xz: "30, -28", note: "MultiBlock" }],
          94: [{ xz: "29, -29", note: "MultiBlock" }]
        },
        back: {
          89: [{ xz: "-31, 27", note: "MultiBlock" }],
          94: [{ xz: "-30, 28", note: "MultiBlock" }]
        }
      }
    ]
  }
];
