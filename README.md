# Projekt React z użyciem Tauri

## Wymagania

Przed rozpoczęciem pracy nad projektem upewnij się, że masz zainstalowane następujące narzędzia:

- Node.js (zalecana wersja LTS)
- npm (Node Package Manager) lub yarn

## Instalacja
1. Przejdź do folderu projektu:

    ```bash
    cd nazwa_projektu
    ```

3. Zainstaluj zależności przy użyciu npm lub yarn:

    ```bash
    npm install
    # lub
    yarn install
    ```

4. Zainstaluj Tauri globalnie, jeśli nie jest zainstalowany:

    ```bash
    npm install -g tauri
    # lub
    yarn global add tauri
    ```

## Uruchamianie

Aby uruchomić aplikację w trybie deweloperskim, wykonaj następujące kroki:

1. Uruchom aplikację React:

    ```bash
    npm start
    # lub
    yarn start
    ```

2. W osobnym oknie terminala, uruchom Tauri:

    ```bash
    npm run tauri dev
    ```



# Struktura folderów które warto znać

Oto krótki opis zawartości poszczególnych folderów w projekcie:

## `/src`

W tym folderze znajduje się kod źródłowy aplikacji React. Zawiera pliki i foldery związane bezpośrednio z aplikacją frontendową.

## `/src/pages`

Tutaj są wszystkie nasze "podstrony", każdy edytuje swoją.

## `/src/css`

Tutaj można utworzyć css do swojej podstrony

### `/src/assets`

Tutaj jest miejsce na wszystkie użyte assety

### `/src/components`

Tutaj można tworzyć komponenty dla swoich podstron.
