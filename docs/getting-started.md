---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Getting Started
keywords:
  - rmuif
  - docs
  - getting started
image: img/illustrations/image-00.png
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '3px',
      color: '#fff',
      padding: '0.3rem',
    }}>
    {children}
  </span>
);


<div style={{ textAlign: "center" }}>
  <img style={{ width: "66%", marginBottom: "33px" }} class="green" alt="Illustration" src={useBaseUrl('img/illustrations/image-00.svg')} />
  <h1>Getting Started</h1>
  <p>
    There are three things that you need follow to pass the exams and get your vendor certification:
  </p>
  <p><Highlight color="#75AADB">Flashcards</Highlight> ⟶ <Highlight color="#75AADB">Playlists</Highlight> ⟶ <Highlight color="#75AADB">Playground</Highlight></p>
  <br />
</div>


## Quickstart

<Tabs
defaultValue="Flashcards"
values={[
{ label: 'Flashcards', value: 'Flashcards' },
{ label: 'Playlists', value: 'Playlists' },
{ label: 'Playground', value: 'Playground' }
]
}>
<TabItem value="Flashcards">

##### To achieve this thing you need train your brain in the art of memorizing raw facts. We use Anki to do that and CrowdAnki to share it with the git community.


 + [Anki](https://apps.ankiweb.net/) is an open-source flashcard app that uses spaced repetition algorithms to help you prevent natural forgetting that help you to intentionally commit information into long-term memory.

 + [CrowdAnki](https://github.com/Stvad/CrowdAnki) is a plugin for Anki that allows users to import and export decks/notes and all relevant information in a JSON format.


</TabItem>
<TabItem value="Playlists">

##### Catch ideas of every single exam topic from videos, that allow you consistency jumping between the anki knowledge to our playground practices test.

</TabItem>
<TabItem value="Playground">

##### Try for your own the challenges presented this place. 

</TabItem>
</Tabs>

## Learning Path

## Contribute
