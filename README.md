# PHSD-PHQMD

PHSD-PHQMD is a unified microscopic transport framework for strongly interacting matter in elementary and nuclear reactions across a broad energy range. In the PHSD sector, it describes the full reaction dynamics with off-shell transport based on Kadanoff-Baym theory and DQPM partonic quasiparticles, including dynamical deconfinement, hadronization, and hadronic rescattering. In the PHQMD sector, it extends baryonic propagation to n-body Quantum Molecular Dynamics, enabling the dynamical formation of nuclear clusters and hypernuclei beyond coalescence or statistical approaches. Cluster recognition is performed with MST and SACA algorithms, while hadronic collisions and partonic/QGP dynamics remain consistent with PHSD. Together, PHSD-PHQMD provides a coherent description of both bulk hadron production and cluster/hypernucleus observables from SIS to RHIC/LHC energies in A+A, p+A, p+p, and pion-induced reactions.

This repository hosts the static website of the PHSD-PHQMD project (GitHub Pages ready).

## What is PHSD?

Parton-Hadron-String Dynamics (PHSD) is a microscopic off-shell transport approach that describes the full dynamical evolution of relativistic heavy-ion collisions:

- initial hard scatterings and string formation
- dynamical deconfinement to the quark-gluon plasma (QGP)
- hadronization by covariant transition rates
- final-state hadronic interactions

In the partonic sector, PHSD is based on the Dynamical Quasi-Particle Model (DQPM), fitted by lattice-QCD thermodynamics.

## What is PHQMD?

Parton-Hadron-Quantum-Molecular Dynamics (PHQMD) is the N-body quantum-molecular realization used for baryonic propagation and cluster formation dynamics in heavy-ion reactions.

## Unified PHSD-PHQMD Transport Picture

The combined framework provides:

- Kadanoff-Baym based off-shell transport dynamics
- in-medium effects within the G-matrix treatment
- momentum-dependent equation of state (MF and QMD)
- collision-integral treatment of hadron-parton interactions
- cluster recognition with MST, SACA, and coalescence options
- event outputs for common analysis workflows

## Website Sections

- Home
- About
- Download Code
- User Guide
- Publications
- Talks
- Team

## Code Access

Code distribution is handled by request form for collaborations:

- `code.html` in this website

## Local Preview

```bash
cd phsdnew
python3 -m http.server 8000
```

Open: `http://localhost:8000`

## Deployment (GitHub Pages)

1. Push this folder as repository root.
2. Open `Settings -> Pages`.
3. Select branch and `/ (root)`.
4. Save and wait for the Pages build.
