/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Component {
  /** ID */
  id?: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 30
   */
  title?: string;
  /**
   * Путь к изображению
   * @minLength 1
   * @maxLength 255
   */
  img_path?: string;
  /**
   * Объем
   * @min -2147483648
   * @max 2147483647
   */
  volume?: number;
  /**
   * Единица измерения
   * @minLength 1
   * @maxLength 10
   */
  unit?: string;
  /**
   * Цена
   * @format decimal
   */
  price?: string;
  /**
   * Краткое описание
   * @minLength 1
   * @maxLength 255
   */
  short_description?: string;
  /**
   * Полное описание
   * @minLength 1
   */
  description?: string;
}

export interface OrderComponent {
  /** Дозировка */
  dosage?: number;
}

export interface CreatedFormulations {
  /** ID */
  id?: number;
  /**
   * Formulation chemist
   * @minLength 1
   */
  formulation_chemist: string;
  /**
   * Technologist
   * @minLength 1
   */
  technologist?: string | null;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Название косметики
   * @maxLength 50
   */
  name?: string | null;
  /**
   * Date formation
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Date completion
   * @format date-time
   */
  date_completion?: string | null;
}

export interface ChemicalElement {
  /** ID */
  pk?: number;
  /**
   * Название
   * @minLength 1
   * @maxLength 30
   */
  title: string;
  /**
   * Путь к изображению
   * @minLength 1
   * @maxLength 255
   */
  img_path?: string;
  /**
   * Объем
   * @min -2147483648
   * @max 2147483647
   */
  volume: number;
  /**
   * Единица измерения
   * @minLength 1
   * @maxLength 10
   */
  unit: string;
  /**
   * Цена
   * @format decimal
   */
  price: string;
}

export interface FormulationComponent {
  chemical_element: ChemicalElement;
  /** Дозировка */
  dosage?: number;
}

export interface FullCosmeticFormulation {
  /** ID */
  pk?: number;
  /**
   * Formulation chemist
   * @minLength 1
   */
  formulation_chemist: string;
  /**
   * Technologist
   * @minLength 1
   */
  technologist?: string | null;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Название косметики
   * @maxLength 50
   */
  name?: string | null;
  /**
   * Date formation
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Date completion
   * @format date-time
   */
  date_completion?: string | null;
  /**
   * Количество побочных эффектов
   * @min -2147483648
   * @max 2147483647
   */
  adverse_effects_count?: number | null;
  components: FormulationComponent[];
}

export interface PutCosmeticFormulation {
  /** ID */
  id?: number;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Название косметики
   * @maxLength 50
   */
  name?: string | null;
  /**
   * Date formation
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Date completion
   * @format date-time
   */
  date_completion?: string | null;
  /**
   * Количество побочных эффектов
   * @min -2147483648
   * @max 2147483647
   */
  adverse_effects_count?: number | null;
  /** Химик-аналитик */
  formulation_chemist?: number | null;
  /** Технолог */
  technologist?: number | null;
}

export interface ResolveCosmeticFormulation {
  /** ID */
  id?: number;
  /** Статус */
  status?: 1 | 2 | 3 | 4 | 5;
  /**
   * Дата создания
   * @format date-time
   */
  date_created?: string;
  /**
   * Название косметики
   * @minLength 1
   */
  name?: string | null;
  /**
   * Date formation
   * @format date-time
   */
  date_formation?: string | null;
  /**
   * Date completion
   * @format date-time
   */
  date_completion?: string | null;
  /** Количество побочных эффектов */
  adverse_effects_count?: number | null;
  /** Химик-аналитик */
  formulation_chemist?: number | null;
  /** Технолог */
  technologist?: number | null;
}

export interface User {
  /** ID */
  id?: number;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Password
   * @minLength 1
   * @maxLength 128
   */
  password: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://127.0.0.1:8000" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Create cosmetics API
 * @version v1
 * @license RIP License
 * @baseUrl http://127.0.0.1:8000
 * @contact <galimabitov@mail.ru>
 *
 * API for creating cosmetics
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  component = {
    /**
     * @description Получение всех химических элементов
     *
     * @tags component
     * @name ComponentList
     * @request GET:/component
     * @secure
     */
    componentList: (
      query?: {
        /** Фильтр по названию химического элемента (начинается с) */
        title?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          elements?: {
            /** Уникальный идентификатор элемента */
            id?: number;
            /** Название химического элемента */
            title?: string;
            /** Путь к изображению элемента */
            img_path?: string;
            /** Объем химического элемента */
            volume?: number;
            /** Единица измерения объема */
            unit?: string;
            /** Цена химического элемента */
            price?: string;
            /** Краткое описание химического элемента */
            short_description?: string;
            /** Полное описание химического элемента */
            description?: string;
          }[];
          /** Количество элементов в корзине */
          count?: number;
          /** ID черновика заявки, если существует */
          formulation_id?: number;
        },
        any
      >({
        path: `/component`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение данных о химическом элементе по его ID
     *
     * @tags component
     * @name ComponentList2
     * @request GET:/component/
     * @originalName componentList
     * @duplicate
     * @secure
     */
    componentList2: (params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление нового химического элемента
     *
     * @tags component
     * @name ComponentCreate
     * @request POST:/component/
     * @secure
     */
    componentCreate: (data: Component, params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменение данных о химическом элементе
     *
     * @tags component
     * @name ComponentUpdate
     * @request PUT:/component/
     * @secure
     */
    componentUpdate: (data: Component, params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление химического элемента и его изображения
     *
     * @tags component
     * @name ComponentDelete
     * @request DELETE:/component/
     * @secure
     */
    componentDelete: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/component/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Получение данных о химическом элементе по его ID
     *
     * @tags component
     * @name ComponentRead
     * @request GET:/component/{id}
     * @secure
     */
    componentRead: (id: string, params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Добавление нового химического элемента
     *
     * @tags component
     * @name ComponentCreate2
     * @request POST:/component/{id}
     * @originalName componentCreate
     * @duplicate
     * @secure
     */
    componentCreate2: (id: string, data: Component, params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/${id}`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Изменение данных о химическом элементе
     *
     * @tags component
     * @name ComponentUpdate2
     * @request PUT:/component/{id}
     * @originalName componentUpdate
     * @duplicate
     * @secure
     */
    componentUpdate2: (id: string, data: Component, params: RequestParams = {}) =>
      this.request<Component, void>({
        path: `/component/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление химического элемента и его изображения
     *
     * @tags component
     * @name ComponentDelete2
     * @request DELETE:/component/{id}
     * @originalName componentDelete
     * @duplicate
     * @secure
     */
    componentDelete2: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/component/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags component
     * @name ComponentAddCreate
     * @summary Добавление химического элемента в состав
     * @request POST:/component/{id}/add
     * @secure
     */
    componentAddCreate: (id?: string, params: RequestParams = {}) =>
      this.request<FullCosmeticFormulation, string>({
        path: `/component/${id}/add`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags component
     * @name ComponentAddImageCreate
     * @summary Добавление или замена изображения для элемента
     * @request POST:/component/{id}/add_image
     * @secure
     */
    componentAddImageCreate: (
      id: string,
      data: {
        /**
         * Файл изображения
         * @format binary
         */
        image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/component/${id}/add_image`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  componentInFormulation = {
    /**
     * No description
     *
     * @tags component_in_formulation
     * @name ComponentInFormulationDeleteDelete
     * @summary Удаление химического элемента из состава
     * @request DELETE:/component_in_formulation/{formulation_pk}/{component_pk}/delete
     * @secure
     */
    componentInFormulationDeleteDelete: (formulationPk: string, componentPk: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/component_in_formulation/${formulationPk}/${componentPk}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Изменение данных о химическом элементе в составе косметического средства.
     *
     * @tags component_in_formulation
     * @name ComponentInFormulationPutUpdate
     * @summary Изменение данных о химическом элементе в составе косметического средства
     * @request PUT:/component_in_formulation/{formulation_pk}/{component_pk}/put
     * @secure
     */
    componentInFormulationPutUpdate: (
      formulationPk: string,
      componentPk: string,
      data: OrderComponent,
      params: RequestParams = {},
    ) =>
      this.request<OrderComponent, void>({
        path: `/component_in_formulation/${formulationPk}/${componentPk}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cosmeticFormulations = {
    /**
     * No description
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsList
     * @request GET:/cosmetic_formulations
     * @secure
     */
    cosmeticFormulationsList: (
      query?: {
        /** Фильтр по статусу */
        status?: string;
        /** Начало периода формирования (дата) */
        formation_start?: string;
        /** Конец периода формирования (дата) */
        formation_end?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CreatedFormulations[], any>({
        path: `/cosmetic_formulations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Получение информации о косметическом средстве по его ID.
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsRead
     * @request GET:/cosmetic_formulations/{id}
     * @secure
     */
    cosmeticFormulationsRead: (id: string, pk: number, params: RequestParams = {}) =>
      this.request<FullCosmeticFormulation, void>({
        path: `/cosmetic_formulations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Удаление косметического средства.
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsDeleteDelete
     * @summary Удаление косметического средства
     * @request DELETE:/cosmetic_formulations/{id}/delete
     * @secure
     */
    cosmeticFormulationsDeleteDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/cosmetic_formulations/${id}/delete`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsFormUpdate
     * @summary Формирование косметического средства
     * @request PUT:/cosmetic_formulations/{id}/form
     * @secure
     */
    cosmeticFormulationsFormUpdate: (id: string, params: RequestParams = {}) =>
      this.request<CreatedFormulations, void>({
        path: `/cosmetic_formulations/${id}/form`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsPutUpdate
     * @summary Изменение названия косметического средства
     * @request PUT:/cosmetic_formulations/{id}/put
     * @secure
     */
    cosmeticFormulationsPutUpdate: (id: string, data: PutCosmeticFormulation, params: RequestParams = {}) =>
      this.request<PutCosmeticFormulation, void>({
        path: `/cosmetic_formulations/${id}/put`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Закрытие заявки на косметическое средство технологом.
     *
     * @tags cosmetic_formulations
     * @name CosmeticFormulationsResolveUpdate
     * @summary Закрытие заявки на косметическое средство технологом
     * @request PUT:/cosmetic_formulations/{id}/resolve
     * @secure
     */
    cosmeticFormulationsResolveUpdate: (id: string, data: ResolveCosmeticFormulation, params: RequestParams = {}) =>
      this.request<CreatedFormulations, void>({
        path: `/cosmetic_formulations/${id}/resolve`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * @description Создание пользователя
     *
     * @tags user
     * @name UserCreateCreate
     * @request POST:/user/create
     * @secure
     */
    userCreateCreate: (data: User, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Вход
     *
     * @tags user
     * @name UserLoginCreate
     * @request POST:/user/login
     * @secure
     */
    userLoginCreate: (
      data: {
        /** username */
        username: string;
        /** password */
        password: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/user/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.UrlEncoded,
        ...params,
      }),

    /**
     * @description Выход
     *
     * @tags user
     * @name UserLogoutCreate
     * @request POST:/user/logout
     * @secure
     */
    userLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/logout`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Обновление данных пользователя
     *
     * @tags user
     * @name UserUpdateUpdate
     * @request PUT:/user/update
     * @secure
     */
    userUpdateUpdate: (data: User, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/user/update`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
