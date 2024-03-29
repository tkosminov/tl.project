export const ru = {
  routers: {
    brand: "TL.Project",
    dashboard: "Главная",
    auth: {
      sign_in: "Авторизация",
      sign_up: "Регистрация",
      change_password: "Восстановление",
    },
    translations: {
      self: "Мои переводы",
      new: "Новый перевод",
      edit: "Редактировать перевод",
    },
    community: {
      profile: "Профиль",
      bookmarks: "Закладки",
    },
    books: {
      self: "Переводы",
    },
  },
  badges: {
    private: "Приватно",
    in_process: "В процессе",
    ready: "Готово",
    suspended: "Приостановлено",
    thrown: "Брошено",
    queue: "В очереди",
  },
  gender: {
    male: "муж",
    female: "жен",
  },
  age: {
    year: "год",
    of_the_year: "года",
    years: "лет",
  },
  bookmark_statuses: {
    planned: "Запланировано",
    watching: "Читаю",
    completed: "Прочитано",
    on_hold: "Отложено",
    dropped: "Брошено",
  },
  views: {
    auth: {
      common: {
        login_to_an_existing_account: "Войти в уже существующий аккаунт",
        forgot_your_password: "Забыли пароль?",
        register_a_new_account: "Зарегистрировать новый аккаунт",
        sign_in: "Войти",
        sign_out: "Выйти",
      },
      sign_in: {
        labels: {
          enter_login: "Введите логин",
          login_is_not_case_sensitive: "Логин не чувствителен к регистру",
          enter_password: "Введите пароль",
          password_is_case_sensitive: "Пароль чувствителен к регистру",
          remain_in_the_system: "Оставаться в системе?",
          accept_cookie_info:
            "Этот сайт использует cookie для хранения токенов авторизации",
        },
        buttons: {
          sign_in: "Войти",
          cancel: "Отмена",
          accept: "Согласиться",
        },
      },
      sign_up: {
        labels: {
          recovery_keys: "Ключи для восстановления аккаунта",
          recovery_keys_alert:
            "Сохраните эти ключи. Без них невозможно будет восстановить аккаунт в случае утраты пароля.",
          enter_login: "Введите логин",
          login_is_not_case_sensitive: "Логин не чувствителен к регистру",
          enter_password: "Введите пароль",
          password_is_case_sensitive: "Пароль чувствителен к регистру",
        },
        buttons: {
          download: "Скачать",
          registration: "Зарегистрироваться",
        },
      },
      change_password: {
        labels: {
          change_password_alert:
            "Пароль успешно изменен. Используйте установленный пароль для входа в аккаунт.",
          enter_recovery_key: "Ключ восстановления",
          recovery_key_is_not_case_sensitive:
            "Ключ восстановления не чувствителен к регистру",
          enter_new_password: "Введите новый пароль",
          password_is_case_sensitive: "Пароль чувствителен к регистру",
        },
        buttons: {
          submit: "Отправить",
        },
      },
    },
    translations: {
      books: {
        list: {
          labels: {
            created: "Создано",
          },
          buttons: {
            translate: "Переводить",
            read: "Читать",
            delete: "Удалить",
          },
        },
        new: {
          labels: {
            enter_file: "Выберите файл",
            file_format: "Электронная книга формата .ePub",
            entered_file: "Выбранный файл",
          },
          buttons: {
            upload: "Загрузить",
          },
        },
        edit: {
          labels: {
            author: "Автор",
            book_status: "Статус",
            sections_list: "Список глав",
            section_title: "Название главы",
            section_status: "Статус",
            is_private: "Приватный перевод?",
            is_private_selected: "Выбрано:",
          },
          buttons: {},
        },
      },
      items: {
        edit: {
          labels: {
            original: "Оригинал",
            translation: "Перевод",
            is_main: "Основная версия перевода?",
            is_main_selected: "Выбрано:",
          },
          buttons: {
            save: "Сохранить",
          },
        },
        new: {
          labels: {
            original: "Оригинал",
            translation: "Перевод",
            is_main: "Основная версия перевода?",
            is_main_selected: "Выбрано:",
          },
          buttons: {
            save: "Сохранить",
          },
        },
      },
      sections: {
        edit: {
          labels: {
            items_list: "Содержимое главы",
            original: "Оригинал",
            translation: "Перевод",
            is_main: "Основной",
          },
          buttons: {
            add: "Добавить",
          },
        },
      },
      translators: {
        edit: {},
      },
    },
    community: {
      user_profile: {
        labels: {
          info: "Информация",
          history: "История",
          created_at: "на сайте с",
          created_at_year: "г.",
        },
        buttons: {},
      },
      user_bookmarks: {},
    },
    books: {
      book: {
        labels: {
          author: "Автор",
          annotation: "Описание",
          status: "Статус перевода",
          info: "Информация",
          rating: "Рейтинги",
          marks: "Оценки",
        },
        buttons: {},
      },
    },
  },
};
